import { colors } from '@/appConstant/colors';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const handleGetStarted = () => {
    // Navigate to chat or main app
    console.log('Get started pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/monova-logo.png')} style={{ width: 120, height: 32, resizeMode: 'contain' }} />
        </View>

        {/* Hero Section */}
        <View style={styles.heroContainer}>
         
          
          <Text style={styles.heroTitle}>
            Your Personal{'\n'}Fashion Assistant
          </Text>
          
          <Text style={styles.heroSubtitle}>
            Discover personalized style recommendations tailored just for you. Upgrade your wardrobe with confidence.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>👗</Text>
            </View>
            <Text style={styles.featureText}>Curated Outfits</Text>
          </View>
          
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>✨</Text>
            </View>
            <Text style={styles.featureText}>Style Upgrade</Text>
          </View>
          
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>💡</Text>
            </View>
            <Text style={styles.featureText}>Smart Recommendations</Text>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity onPress={()=>router.push('/(tabs)/home/chat')} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Get Started</Text>
            <ArrowRight size={20} color={colors.white} />
          </TouchableOpacity>
          
          <Text style={styles.ctaSubtext}>
            Start your style journey today
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    // borderWidth : 1
  },
  logo: {
    width: 64,
    height: 64,
    backgroundColor: colors.primary,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoText: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  brandName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
    letterSpacing: 0.5,
  },
  heroContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  sparkleContainer: {
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.black,
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 280,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  feature: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    width: 56,
    height: 56,
    backgroundColor: colors.light,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
  },
  ctaContainer: {
    alignItems: 'center',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
  ctaSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default Home;