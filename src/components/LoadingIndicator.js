import React, { useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator, Animated, StyleSheet } from 'react-native';

/**
 * Componente reutilizable de indicador de carga.
 * Muestra un spinner animado con texto y efecto de pulso.
 *
 * @param {{ message: string }} props
 */
const LoadingIndicator = ({ message = 'Cargando personajes...' }) => {
  const pulseAnim = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.pulseCircle, { opacity: pulseAnim }]} />
      <ActivityIndicator size="large" color="#97DECE" style={styles.spinner} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F0F1A',
  },
  pulseCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(151, 222, 206, 0.15)',
  },
  spinner: {
    marginBottom: 16,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});

export default LoadingIndicator;
