import { colors } from '@/appConstant/colors';
import { Collections, Item, collection, filterOptions, mockItems } from '@/appConstant/data';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleFavorite } from '@/store/slices/favoritesSlice';
import { Bookmark, ChevronDown, Plus } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2; // 2 columns with padding

const Save = () => {
    const dispatch = useAppDispatch();
    const { favoriteItemIds } = useAppSelector(state => state.favorites);

    const [filteredItems, setFilteredItems] = useState<Item[]>(mockItems);
    const [activeTab, setActiveTab] = useState<'Collections' | 'Outfits' | 'Items'>('Collections');
    const [selectedFilters, setSelectedFilters] = useState({
        categories: [] as string[],
        colors: [] as string[],
        styles: [] as string[],
    });
    const [showFilters, setShowFilters] = useState(false);

    // Animation values for items
    const [animatedValues] = useState(
        mockItems.map(() => new Animated.Value(0))
    );

    useEffect(() => {
        // Animate items on mount
        const animations = animatedValues.map((animValue, index) =>
            Animated.timing(animValue, {
                toValue: 1,
                duration: 300,
                delay: index * 50,
                useNativeDriver: true,
            })
        );

        Animated.stagger(50, animations).start();
    }, []);

    useEffect(() => {
        // Filter items based on active filters
        let filtered = mockItems;

        if (selectedFilters.categories.length > 0) {
            filtered = filtered.filter(item =>
                selectedFilters.categories.includes(item.category)
            );
        }

        if (selectedFilters.colors.length > 0) {
            filtered = filtered.filter(item =>
                selectedFilters.colors.includes(item.color)
            );
        }

        if (selectedFilters.styles.length > 0) {
            filtered = filtered.filter(item =>
                selectedFilters.styles.includes(item.style)
            );
        }

        setFilteredItems(filtered);
    }, [selectedFilters]);

    const handleToggleFavorite = (item: Item) => {
        dispatch(toggleFavorite(item));

        // Add a little bounce animation to the bookmark
        const itemIndex = mockItems.findIndex(i => i.id === item.id);
        if (itemIndex !== -1) {
            Animated.sequence([
                Animated.timing(animatedValues[itemIndex], {
                    toValue: 1.2,
                    duration: 150,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues[itemIndex], {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    };

    const toggleFilter = (filterType: 'categories' | 'colors' | 'styles', value: string) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter(item => item !== value)
                : [...prev[filterType], value]
        }));
    };

    const renderTabButton = (tab: 'Collections' | 'Outfits' | 'Items') => (
        <TouchableOpacity
            className={`px-4 py-2 mr-6 ${activeTab === tab ? 'border-b-2 border-black' : ''}`}
            onPress={() => setActiveTab(tab)}
        >
            <Text className={`text-base font-medium ${activeTab === tab ? 'text-black font-semibold' : 'text-gray-400'}`}>
                {tab}
            </Text>
        </TouchableOpacity>
    );

    const renderFilterChips = (filterType: 'categories' | 'colors' | 'styles', options: string[]) => (
        <View className="px-6 mb-3">
            <Text className="text-sm font-semibold text-black mb-2 capitalize">
                {filterType.charAt(0).toUpperCase() + filterType.slice(0, -1)}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-2">
                    {options.map((option) => {
                        const isSelected = selectedFilters[filterType].includes(option);
                        return (
                            <TouchableOpacity
                                key={option}
                                className={`px-3 py-1.5 rounded-2xl border ${isSelected
                                    ? 'bg-orange-500 border-orange-500'
                                    : 'bg-white border-gray-200'
                                    }`}
                                onPress={() => toggleFilter(filterType, option)}
                            >
                                <Text className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-gray-600'}`}>
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );

    const renderItem = ({ item, index }: { item: Item; index: number }) => {
        const isFavorite = favoriteItemIds.includes(item.id);
        const animatedValue = animatedValues[index] || new Animated.Value(1);

        return (
            <Animated.View
                style={[
                    {
                        transform: [
                            { scale: animatedValue },
                            {
                                translateY: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [50, 0],
                                }),
                            },
                        ],
                        opacity: animatedValue,
                        width: ITEM_WIDTH,
                    },
                ]}
                className="bg-white rounded-xl mb-4 shadow-sm"
            >
                <TouchableOpacity className="p-2">
                    <View className="relative">
                        <Image
                            source={{ uri: item.image }}
                            className="w-full h-45 rounded-lg bg-gray-100"
                            style={{ height: 180 }}
                        />
                        <TouchableOpacity
                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-sm"
                            onPress={() => handleToggleFavorite(item)}
                        >
                            <Bookmark
                                size={20}
                                color={isFavorite ? colors.primary : '#999'}
                                fill={isFavorite ? colors.primary : 'transparent'}
                            />
                        </TouchableOpacity>
                        <View className="absolute bottom-2 left-2 bg-black/70 rounded-xl px-2 py-1">
                            <Text className="text-white text-xs font-medium capitalize">
                                {item.category}
                            </Text>
                        </View>
                    </View>

                    <View className="pt-2">
                        <Text className="text-sm font-semibold text-black mb-0.5" numberOfLines={1}>
                            {item.name}
                        </Text>
                        <Text className="text-xs text-gray-600 mb-1.5">
                            {item.brand}
                        </Text>

                        <View className="flex-row items-center mb-1.5">
                            <View
                                className="w-3 h-3 rounded-full mr-1.5 border border-gray-200"
                                style={{ backgroundColor: item.color === 'white' ? '#f0f0f0' : item.color }}
                            />
                            <Text className="text-xs text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded-lg capitalize">
                                {item.style}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    // Fixed renderCollection function with proper alignment
    const renderCollection = ({ item, index }: { item: Collections; index: number }) => {
        return (
            <View className="bg-white rounded-2xl mx-6 mb-6 p-4 shadow-lg relative">
                <Text className="text-lg font-semibold text-black mb-4 capitalize">
                    {item.title}
                </Text>
                <View className="flex-row justify-between">
                    {/* Left column - single tall image */}
                    <View style={{ width: '48%' }}>
                        {item.images[0] && (
                            <TouchableOpacity className="relative rounded-xl overflow-hidden shadow-sm">
                                <Image
                                    source={{ uri: item.images[0] }}
                                    className="rounded-xl bg-gray-100"
                                    style={{ width: '100%', height: 350 }}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                        )}
                    </View>

                    {/* Right column - two stacked shorter images */}
                    <View style={{ width: '48%' }} className="justify-between">
                        {item.images[1] && (
                            <TouchableOpacity className="relative rounded-xl overflow-hidden shadow-sm">
                                <Image
                                    source={{ uri: item.images[1] }}
                                    className="rounded-xl bg-gray-100"
                                    style={{ width: '100%', height: 167.5 }}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                        )}
                        {item.images[2] && (
                            <TouchableOpacity className="relative rounded-xl overflow-hidden shadow-sm">
                                <Image
                                    source={{ uri: item.images[2] }}
                                    className="rounded-xl bg-gray-100"
                                    style={{ width: '100%', height: 167.5 }}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                
                {/* Bookmark positioned absolutely */}
                <TouchableOpacity
                    className="absolute top-6 right-6 bg-white rounded-full p-2 shadow-sm"
                    // onPress={() => handleToggleFavorite(item)}
                >
                    <Bookmark
                        size={20}
                        color="#999"
                        fill="transparent"
                    />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="px-3 py-2">
                <Text className="text-2xl font-bold text-black">Save</Text>
            </View>

            {/* Tab Navigation */}
            <View className="flex-row px-6 mb-5">
                {renderTabButton('Collections')}
                {renderTabButton('Outfits')}
                {renderTabButton('Items')}
            </View>

            {/* Add New and Filter Buttons */}
            {(activeTab === "Collections" || activeTab === "Items") && (
                <View className="flex-row items-center px-6 mb-4">
                    <TouchableOpacity className="flex-row items-center px-3 py-2 border border-orange-500 rounded-full mr-3">
                        <Plus size={16} color={colors.primary} />
                        <Text className="ml-1 text-orange-500 text-sm font-medium">Add new</Text>
                    </TouchableOpacity>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="flex-1"
                        contentContainerStyle={{ paddingRight: 24, alignItems: 'center' }}
                    >
                        <TouchableOpacity className="px-3 py-1.5 bg-amber-700 rounded-2xl mr-2">
                            <Text className="text-white text-xs font-medium">🏢 Work</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="px-3 py-1.5 bg-yellow-400 rounded-2xl mr-2">
                            <Text className="text-black text-xs font-medium">🌟 Leisure</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="px-3 py-1.5 bg-pink-500 rounded-2xl mr-2">
                            <Text className="text-white text-xs font-medium">💎 Designer</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )}

            {/* Advanced Filters - Only for Items tab */}
            {activeTab === "Items" && (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mb-4 px-6"
                    contentContainerStyle={{ alignItems: 'center', paddingRight: 24 }}
                >
                    <TouchableOpacity
                        className="flex-row items-center justify-center px-4 py-2.5 mr-3 bg-white rounded-full border border-gray-200 shadow-sm"
                        style={{ minHeight: 50, width: 100 }}
                        onPress={() => setShowFilters(!showFilters)}
                    >
                        <Text className="text-sm text-gray-600 mr-1">Type</Text>
                        <ChevronDown size={16} color="#666" />
                        {selectedFilters.categories.length > 0 && (
                            <View className="bg-orange-500 rounded-full min-w-5 h-5 justify-center items-center ml-1.5">
                                <Text className="text-white text-xs font-bold">
                                    {selectedFilters.categories.length}
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-row items-center justify-center px-4 py-2.5 mr-3 bg-white rounded-full border border-gray-200 shadow-sm"
                        style={{ minHeight: 50, width: 100 }}
                    >
                        <Text className="text-sm text-gray-600 mr-1">Style</Text>
                        <ChevronDown size={16} color="#666" />
                        {selectedFilters.styles.length > 0 && (
                            <View className="bg-orange-500 rounded-full min-w-5 h-5 justify-center items-center ml-1.5">
                                <Text className="text-white text-xs font-bold">
                                    {selectedFilters.styles.length}
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-row items-center justify-center px-4 py-2.5 mr-3 bg-white rounded-full border border-gray-200 shadow-sm"
                        style={{ minHeight: 50, width: 100 }}
                    >
                        <Text className="text-sm text-gray-600 mr-1">Mood</Text>
                        <ChevronDown size={16} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-row items-center justify-center px-4 py-2.5 mr-3 bg-white rounded-full border border-gray-200 shadow-sm"
                        style={{ minHeight: 50, width: 100 }}
                    >
                        <Text className="text-sm text-gray-600 mr-1">Color</Text>
                        <ChevronDown size={16} color="#666" />
                        {selectedFilters.colors.length > 0 && (
                            <View className="bg-orange-500 rounded-full min-w-5 h-5 justify-center items-center ml-1.5">
                                <Text className="text-white text-xs font-bold">
                                    {selectedFilters.colors.length}
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </ScrollView>
            )}

            {/* Filter Panel - Only shown when showFilters is true */}
            {showFilters && activeTab === "Items" && (
                <View className="bg-white py-4 border-t border-b border-gray-200 mb-4">
                    {renderFilterChips('categories', filterOptions.categories)}
                    {renderFilterChips('styles', filterOptions.styles)}
                    {renderFilterChips('colors', filterOptions.colors)}
                </View>
            )}

            {/* Content based on active tab */}
            {activeTab === "Collections" && (
                <FlatList
                    data={collection}
                    renderItem={renderCollection}
                    numColumns={1}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            )}

            {activeTab === "Outfits" && (
                <FlatList
                    data={collection}
                    renderItem={renderCollection}
                    numColumns={1}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            )}

            {activeTab === "Items" && (
                <FlatList
                    data={filteredItems}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </SafeAreaView>
    );
};

export default Save;