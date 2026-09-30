import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';


const HomeScreen = ({ navigation }) => {

  const studentInfo = {
    nombre: 'Cristian Josue Guardado',
    carnet: '20240365',
    seccion: 'B',
    grupo: '1',
  };


  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const buttonScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(200, [
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, buttonScale]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0F1A" />

      {/* Decoraciones de fondo */}
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />

      {/* Header */}
      <Animated.View
        style={[
          styles.header,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={styles.greeting}>¡Hola!</Text>
        <Text style={styles.title}>Perfil del Estudiante</Text>
        <Text style={styles.subtitle}>Evaluación Práctica — Desarrollo Móvil</Text>
      </Animated.View>

      {/* Tarjeta de información */}
      <Animated.View
        style={[
          styles.infoCard,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <InfoRow label="Nombre" value={studentInfo.nombre} />
        <View style={styles.divider} />
        <InfoRow label="Carnet" value={studentInfo.carnet} />
        <View style={styles.divider} />
        <InfoRow label="Sección" value={studentInfo.seccion} />
        <View style={styles.divider} />
        <InfoRow label="Grupo" value={studentInfo.grupo} />
      </Animated.View>

      {/* Botón de navegación */}
      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('APIView')}
        >
          <Text style={styles.buttonText}>Explorar Personajes</Text>
          <Text style={styles.buttonSubtext}>Rick & Morty API</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

/**
 * Componente auxiliar para mostrar una fila de información.
 */
const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  // Decoraciones de fondo
  bgCircle1: {
    position: 'absolute',
    top: -80,
    right: -60,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(151, 222, 206, 0.08)',
  },
  bgCircle2: {
    position: 'absolute',
    bottom: -100,
    left: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(108, 92, 231, 0.06)',
  },
  // Header
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  greeting: {
    fontSize: 32,
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.45)',
    letterSpacing: 0.3,
  },
  // Tarjeta de info
  infoCard: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    marginBottom: 36,
    // Sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  // Botón
  button: {
    backgroundColor: '#97DECE',
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 16,
    alignItems: 'center',
    // Sombra
    shadowColor: '#97DECE',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F0F1A',
    letterSpacing: 0.3,
  },
  buttonSubtext: {
    fontSize: 12,
    color: 'rgba(15, 15, 26, 0.6)',
    marginTop: 2,
  },
});

export default HomeScreen;
