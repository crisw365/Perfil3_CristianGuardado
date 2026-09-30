import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import useFetchCharacters from '../hooks/useFetchCharacters';
import Card from '../components/Card';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';


const APIViewScreen = () => {
  const { data, loading, error } = useFetchCharacters();

  if (loading) {
    return <LoadingIndicator message="Cargando personajes..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0F1A" />

      {/* Header de la lista */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rick & Morty</Text>
        <Text style={styles.headerSubtitle}>
          {data.length} personajes encontrados
        </Text>
      </View>

      {/* Lista de personajes */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            image={item.image}
            status={item.status}
            species={item.species}
            origin={item.origin.name}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1A',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.45)',
    marginTop: 4,
  },
  listContent: {
    paddingBottom: 24,
  },
});

export default APIViewScreen;
