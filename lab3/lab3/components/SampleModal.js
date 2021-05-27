//BSCS 3-4
//Pedrajeta, Evander
//Loresco, Lotilou
//Abayon, Lesa
//Hernz, Ramones
import React from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

const image = {
  uri:
    'https://data.whicdn.com/images/351123692/original.jpg',
};

const styles = StyleSheet.create({
  Apple: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  Ball: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    fontSize: 15,
  },
  Cat: {
    color: '#0f66e9',
    fontfamily: 'Adobe Garamond',
    textAlign: "justify",
    fontFamily: 'helvetica'
  }
});

const SampleModal = (items) => {
  return (
    <Modal visible={items.visible} animationType="fade">
      <ImageBackground source={image} style={styles.Apple}>
        <ScrollView>
          <View style={styles.Apple}>
            <Image
              style={{ width: 200, height: 150 }}
              source={{
                uri:
                  'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.0-9/163982993_10222477231353856_4719913197693034227_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=825194&_nc_eui2=AeEMCnENbuDyJNl8NgezRvWr8um7hLNwJIvy6buEs3Aki23u5VIkyhHAjBAJnB6nMUkX9tuvbXkoGSlyAT81G6Li&_nc_ohc=Uy8WpnP0Z9YAX90vGiV&_nc_ht=scontent.fmnl25-1.fna&oh=b5fa9ee120ce5a9fb0200f87b98bae16&oe=60850485',
              }}
            />
          </View>
          <Text style={styles.Cat}>
         {'\t'}Satoru Gojo is a tall man, towering over his students, and is considered to be very attractive by many people. He has white hair that's often spiked up, but Gojo lets it down when he's in more casual attire. Gojo has bright blue eyes, but they're usually covered by his signature black blindfold or a pair of dark sunglasses. {'\n\n\t'} While working, Gojo wears an all-black high-necked jacket with matching pants and dark dress boots. In the past, Gojo has worn bandages over his eyes rather than his simple blindfold. He has several different casual attires that usually include long-sleeved shirts and slacks. He even wears long-sleeved hoodies to the beach with black swim trunks. {'\n\n\t'} Satoru is a complex individual. He is normally seen to be nonchalant and playful towards his students, close colleagues, and friends. However, he is unsympathetic and cruel towards sorcerer executives, an example being his blatant disrespect towards Principal Gakuganji, and his enemies. {'\n\n\t'} Satoru is extremely confident in his abilities and reputation as a powerful sorcerer, believing himself to be invincible. His opinion of others often only go as far as his judgement of their strength, and he is quite apathetic towards anyone he deems weak. Additionally, greatly influenced by his own desire for power, he is very arrogant. He is convinced that he is the strongest in the world, which he technically is, claiming, during his fight with Toji Fushiguro, that "throughout the Heavens and earth, he alone is the honored one." This can be further exemplified when he was tasked with protecting Riko Amanai, one of the few 'weak' people he genuinely grew to show compassion for. However, any empathy of her death was soon negated by his extensive amount of pride and arrogance after perfecting his reverse cursed technique in his following battle against Toji Fushiguro. {'\n\n\n'}
          </Text>
          <View style={styles.Ball}>
            <Button title="Close" onPress={items.onClose} color="red" />
          </View>
        </ScrollView>
      </ImageBackground>
    </Modal>
  );
};

export default SampleModal;
