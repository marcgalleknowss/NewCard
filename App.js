
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import CustomButton from './components/CustomButton';
import ProfileCard from './components/ProfileCard';

export default function App() {
  const [profiles, setProfiles] = useState([]);

  const addProfile = () => {
    setProfiles((previousProfiles) => {
      const number = previousProfiles.length + 1;

      const newProfile = {
        id: number,
        name: `Marc ${number}`,
        email: `email${number}@gmail.com`,
      };

      return [...previousProfiles, newProfile];
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>My Profiles</Text>

      <Text style={styles.subtitle}>
        Total Profiles: {profiles.length}
      </Text>

      <ScrollView
        style={styles.profileList}
        showsVerticalScrollIndicator={false}
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            email={profile.email}
          />
        ))}
      </ScrollView>

      <CustomButton
        title="Add Profile"
        onPress={addProfile}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5f9',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 5,
    marginBottom: 20,
  },
  profileList: {
    flex: 1,
  },
});
