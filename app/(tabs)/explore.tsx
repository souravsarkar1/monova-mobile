import { colors } from '@/appConstant/colors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleFavorite } from '@/store/slices/favoritesSlice';
import { Filter, Heart, Search, ShoppingBag, Star, TrendingUp } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// Featured collections data
const featuredCollections = [
  {
    id: '1',
    title: 'Summer Essentials',
    subtitle: '12 trending pieces',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop&q=80',
    gradient: ['#FF6B6B', '#FF8E8E'],
  },
  {
    id: '2',
    title: 'Office Ready',
    subtitle: '8 professional looks',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=400&fit=crop&q=80',
    gradient: ['#4ECDC4', '#44A08D'],
  },
  {
    id: '3',
    title: 'Weekend Vibes',
    subtitle: '15 casual outfits',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=400&fit=crop&q=80',
    gradient: ['#FFD93D', '#FF9500'],
  },
];

// Categories data
const categories = [
  { id: '1', name: 'Tops', icon: '👚', count: 45, color: '#FFE5E5' },
  { id: '2', name: 'Bottoms', icon: '👖', count: 32, color: '#E5F3FF' },
  { id: '3', name: 'Dresses', icon: '👗', count: 28, color: '#F0E5FF' },
  { id: '4', name: 'Shoes', icon: '👠', count: 38, color: '#E5FFE5' },
  { id: '5', name: 'Bags', icon: '👜', count: 22, color: '#FFF5E5' },
  { id: '6', name: 'Jewelry', icon: '💎', count: 15, color: '#FFE5F5' },
];

// Trending items data
const trendingItems = [
  {
    id: '1',
    name: 'Oversized Blazer',
    brand: 'Zara',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop&q=80',
    rating: 4.8,
    isNew: true,
  },
  {
    id: '2',
    name: 'Silk Midi Dress',
    brand: 'Mango',
    price: 75,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop&q=80',
    rating: 4.6,
    isHot: true,
  },
  {
    id: '3',
    name: 'Knit Cardigan',
    brand: 'COS',
    price: 95,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=400&fit=crop&q=80',
    rating: 4.9,
    isNew: true,
  },
  {
    id: '4',
    name: 'High-Waist Jeans',
    brand: 'Everlane',
    price: 78,
    originalPrice: 98,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop&q=80',
    rating: 4.7,
  },
];

const Explore = () => {
  const dispatch = useAppDispatch();
  const { favoriteItemIds } = useAppSelector(state => state.favorites);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleToggleFavorite = (item: any) => {
    dispatch(toggleFavorite({
      id: item.id,
      name: item.name,
      category: 'top', // You can determine this based on the item
      color: 'black', // Default values for the required fields
      style: 'casual',
      image: item.image,
      price: item.price,
      brand: item.brand,
      tags: []
    }));
  };

  const renderFeaturedCollection = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.featuredCard}>
      <Image source={{ uri: item.image }} style={styles.featuredImage} />
      <View style={styles.featuredOverlay}>
        <Text style={styles.featuredTitle}>{item.title}</Text>
        <Text style={styles.featuredSubtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryCount}>{item.count} items</Text>
    </TouchableOpacity>
  );

  const renderTrendingItem = ({ item }: { item: any }) => {
    const isFavorite = favoriteItemIds.includes(item.id);
    
    return (
      <TouchableOpacity style={styles.trendingCard}>
        <View style={styles.trendingImageContainer}>
          <Image source={{ uri: item.image }} style={styles.trendingImage} />
          
          {/* Badges */}
          {item.isNew && (
            <View style={[styles.badge, styles.newBadge]}>
              <Text style={styles.badgeText}>NEW</Text>
            </View>
          )}
          {item.isHot && (
            <View style={[styles.badge, styles.hotBadge]}>
              <Text style={styles.badgeText}>HOT</Text>
            </View>
          )}
          
          {/* Favorite button */}
          <TouchableOpacity 
            style={styles.favoriteButton}
            onPress={() => handleToggleFavorite(item)}
          >
            <Heart
              size={18}
              color={isFavorite ? colors.primary : '#999'}
              fill={isFavorite ? colors.primary : 'transparent'}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.trendingDetails}>
          <Text style={styles.trendingBrand}>{item.brand}</Text>
          <Text style={styles.trendingName} numberOfLines={1}>{item.name}</Text>
          
          <View style={styles.ratingContainer}>
            <Star size={12} color="#FFD700" fill="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>${item.price}</Text>
            {item.originalPrice && (
              <Text style={styles.originalPrice}>${item.originalPrice}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          {/* <Text style={styles.greeting}>Discover</Text> */}
          <Text style={styles.title}>Fashion Trends</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Search size={24} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Filter size={24} color={colors.black} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Featured Collections */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Collections</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={featuredCollections}
            renderItem={renderFeaturedCollection}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredList}
          />
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={{...styles.sectionTitle, marginBottom: 10}}>Shop by Category</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            numColumns={3}
            scrollEnabled={false}
            contentContainerStyle={styles.categoriesGrid}
            columnWrapperStyle={styles.categoriesRow}
          />
        </View>

        {/* Trending Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.trendingHeader}>
              <TrendingUp size={20} color={colors.primary} />
              <Text style={{...styles.sectionTitle, marginLeft : 10}}>Trending Now</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={trendingItems}
            renderItem={renderTrendingItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingList}
          />
        </View>

        {/* Personalized Recommendations */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Just for You</Text>
          <View style={styles.personalizedCard}>
            <View style={styles.personalizedContent}>
              <Text style={styles.personalizedTitle}>Get Personalized Recommendations</Text>
              <Text style={styles.personalizedSubtitle}>
                Tell us your style preferences to discover items you'll love
              </Text>
              <TouchableOpacity style={styles.personalizedButton}>
                <Text style={styles.personalizedButtonText}>Start Quiz</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.personalizedIcon}>
              <ShoppingBag size={40} color={colors.primary} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 20,
    // paddingTop: 8,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.black,
    // marginTop: 2,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 32,
  },
  lastSection: {
    marginBottom: 100,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginLeft : 20
  },
  seeAll: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
    marginRight : 20
  },
  trendingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 8,
    // borderWidth : 1,
    marginLeft : 20
  },
  featuredList: {
    paddingHorizontal: 24,
  },
  featuredCard: {
    width: width * 0.7,
    height: 160,
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  featuredSubtitle: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.9,
    marginTop: 2,
  },
  categoriesGrid: {
    paddingHorizontal: 24,
  },
  categoriesRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCard: {
    width: (width - 72) / 3,
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 2,
  },
  categoryCount: {
    fontSize: 12,
    color: '#666',
  },
  trendingList: {
    paddingHorizontal: 24,
  },
  trendingCard: {
    width: 160,
    marginRight: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  trendingImageContainer: {
    position: 'relative',
  },
  trendingImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  newBadge: {
    backgroundColor: '#4CAF50',
  },
  hotBadge: {
    backgroundColor: '#FF5722',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.white,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  trendingDetails: {
    padding: 12,
  },
  trendingBrand: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  trendingName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    marginTop: 2,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  personalizedCard: {
    marginHorizontal: 24,
    backgroundColor: colors.light,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop : 10
  },
  personalizedContent: {
    flex: 1,
    paddingRight: 16,
  },
  personalizedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 4,
  },
  personalizedSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  personalizedButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  personalizedButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  personalizedIcon: {
    opacity: 0.3,
  },
});

export default Explore;