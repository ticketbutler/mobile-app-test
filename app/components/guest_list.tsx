import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

export const GuestList = () => {
    const [search, setSearch] = useState('');
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        fetch(`https://api.ticketbutler.io/v3/events/123/guests?q=${search}`)
            .then(res => res.json())
            .then(data => setGuests(data.guests));
    }, [search]);

    return (
        <View>
            <TextInput
                onChangeText={(text) => setSearch(text)}
                placeholder="Search guests..."
            />
            <FlatList
                data={guests}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{JSON.stringify(item.metadata)}</Text>
                    </View>
                )}
            />
        </View>
    );
};