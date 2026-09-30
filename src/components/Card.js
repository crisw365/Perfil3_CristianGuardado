import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

/**
 * Componente reutilizable Card para mostrar información de un personaje.
 * Recibe sus datos vía props.
 *
 * @param {{ name: string, image: string, status: string, species: string, origin: string }} props
 */
const Card = ({ name, image, status, species, origin }) => {
  const statusColor =
    status === 'Alive' ? '#00E676' : status === 'Dead' ? '#FF5252' : '#FFD740';

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.statusRow}>
          <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
          <Text style={styles.statusText}>
            {status} — {species}
          </Text>
        </View>
        <Text style={styles.originLabel}>Origen:</Text>
        <Text style={styles.originValue} numberOfLines={1}>
          {origin}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    // Sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  image: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 6,
  },
  statusText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  originLabel: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.45)',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  originValue: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.85)',
    marginTop: 2,
  },
});

export default Card;
