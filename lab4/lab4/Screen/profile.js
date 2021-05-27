import React from 'react';
import { ScrollView, Text, Button, Image, View, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {'\n'} TWICE {'\n'}Members{'\n\n'}
      </Text>
      <ScrollView>
        <View style={styles.cont}>
          <Text style={styles.prof}>TZUYU</Text>
          <Image
            style={styles.image}
            source={{ uri: 'https://i.pinimg.com/originals/73/a6/78/73a678ab6451b55d87a86e2eac429a7a.gif' }}/>
        </View>
        <Text style={styles.text}>
          {'\t'}Tzuyu is the maknae of the group, meaning the youngest member.
          She’s also one of the most discreet of the girls, even though she has her
          savage moments . She’s very sweet and you basically want to hug her
          everytime she’s on the screen because she’s such a cute little puppy,
          dogs are actually her favorite thing in the world, but she can also be
          extremely sexy when she’s performing. {'\n'}
          {'\t'}Tzuyu is the only Taiwanese member, which used to be hard on her when
          she started as a trainee because she couldn’t really speak with anyone
          because of the language barrier - but babe learned korean like a boss. {'\n'}
          {'\t'}Her position in the group is vocalist. She’s also considered to be the
          group’s “visual”, that title often goes to the most physically
          appealing member to the audience, and god knows Tzuyu deserves it.
          {'\n'}
          {'\t'}Her nicknames are “Evil Maknae” because she can be extremely blunt
          with the members, like a true savage 😂, and “Yoda”, because of her
          precious little ears. {'\n'}
        </Text>

        <View style={styles.cont}>
          <Text style={styles.prof}>JEONGYEON</Text>
          <Image
            style={styles.image}
            source={{ uri:'http://images6.fanpop.com/image/photos/43000000/Feel-Special-jeongyeon-twice-43026922-540-320.gif' }}/>
        </View>
        <Text style={styles.text}>
          {'\t'}Yoo Jeong-yeon (Korean: 유정연; Hanja: 俞定延; born 1 November 1996),
          known mononymously as Jeongyeon (Korean: 정연), is a South Korean
          singer. She is a member of Twice, a South Korean girl group formed by
          JYP Entertainment. {'\n'}
          {'\t'}Jeongyeon failed an audition to join JYP Entertainment as a child, but
          eventually joined after passing an open audition in March 2010. She
          trained for five years before her debut with Twice. {'\n'}
          {'\t'}From 2013 to early 2015, it was expected that Jeongyeon would become a
          member of a new JYP girl group alongside current Twice members Nayeon,
          Sana, and Jihyo. However, this project was cancelled and in the end
          they did not debut.{'\n'}
          {'\t'}In 2015, Jeongyeon competed in the television program Sixteen, a
          reality television competition designed to select the founding members
          of Twice. In the final episode, she was chosen as one of the nine
          winners who went on to form Twice {'\n'}
        </Text>

        <View style={styles.cont}>
          <Text style={styles.prof}>MOMO</Text>
          <Image
            style={styles.image}
            source={{ uri:'https://i.pinimg.com/originals/00/17/9c/00179c450aa0845074974f3b4e485182.gif' }}/>
        </View>
        <Text style={styles.text}>
          {'\t'}Ah Momo, you can find her either eating or flirting with every member
          of the group .She’s one of the most touchy feely member, basically
          showing her affection to everyone, everywhere, all the time. She’s
          also very funny and basically a child . Momo’s first love is Jokbal
          (pork feet), and her second love is dancing, and she’s damn good at
          it, so good that she’s been called nation’s best dancer . {'\n'}
          {'\t'}Momo is one of the three Japanese members of Twice, the other two are
          Mina and Sana - they all had to learn korean when they became
          trainees, which wasn’t so long ago, so often their language mistakes
          cause hilarious moments.{'\n'}
          {'\t'}Her positions in the group are main dancer and vocalist. Her nicknames
          are Momorin, Moguri (Momo+Noguri (raccoon in korean)), Racoon, dancing
          machine… you pick the one you like. She’s called raccoon because she
          looks like one . {'\n'}
        </Text>

        <View style={styles.cont}>
          <Text style={styles.prof}>SANA</Text>
          <Image
            style={styles.image}
            source={{ uri:'https://64.media.tumblr.com/a271a6eec68ab06a67c61ec61b372394/ccb304ab3691c561-a3/s540x810/77e18f5447de2067d3aa40b10d3d25f7dc12c8f1.gifv'}}/>
        </View>
        <Text style={styles.text}>
          {'\t'}A common saying in the fandom is “No Sana No Life” it’s a play on
          words because “Sana” means “to live” in Korean so no “sana” no life,
          and obviously once you get to know Sana, you realize that she’s one of
          the members who brings the most life to the group, she’s truly one of
          a kind and it’s impossible not to love her. {'\n'}
          {'\t'}She’s in love with fellow member Dahyun #saida 💙 Those two are
          married, don’t fight me on this. {'\n'}
          {'\t'}Sana is one of the three Japanese members of Twice, the other two are
          Momo and Mina. {'\n'}
          {'\t'}Her positions in the group are vocalist and lead dancer. {'\n'}
          {'\t'}She’s very well known for her catch phrases such as “Shy, shy, shy”
          “Ohyo, Ohyo, Ohyo” and “Cheese Kimbap” . Her nickname are
          Sanaconda/Sanasnake and Shiba {'\n'}
        </Text>

        <View style={styles.cont}>
          <Text style={styles.prof}>MINA</Text>
          <Image
            style={styles.image}
            source={{ uri: 'https://i.pinimg.com/originals/13/b4/3c/13b43cc3fc1647646df2aceb168c59c1.gif' }}
          />
        </View>
        <Text style={styles.text}>
          {'\t'}Ah Mina my heart, I don’t even know how to start. Being one of the
          most discreet members, it probably takes the longest to get to know
          Mina, but once you do, you realize she’s the cutest little penguin who
          can turn into a sexy badass motherfucking swan in one second. {'\n'}
          {'\t'}She’s an extremely sweet person, she can be very shy in front of the
          cameras but then sometimes she just snaps and goes crazy dancing, and
          she actually talks a lot when the cameras are off. She also loves
          playing video games.{'\n'}
          {'\t'}She’s also quite the competitor . She was born in america but moved to
          japan when she was young, she can understand english and pretends she
          doesn’t know how to speak it so she doesn’t have to on camera. {'\n'}
          </Text>

          <View style={styles.cont}>
            <Text style={styles.prof}>JIHYO</Text>
            <Image
              style={styles.image}
              source={{ uri: 'https://64.media.tumblr.com/5ad9fc221a5ab6d55837ab7b2898aafe/tumblr_pzj9h5RSzB1ut8ku9o1_250.gifv' }}
            />
          </View>
          <Text style={styles.text}>
            {'\t'}Jihyo is basically the mom of the group - always supportive of
            everyone, always making sure that none of them are put aside, and
            overall a really funny, caring and amazingly positive person, she
            keeps everyone’s spirit up. {'\n'}
            {'\t'}She was also the one who was a trainee the longest, 10 years to be
            exact, so she has a lot of experience which is also why she’s the
            leader. Her position in the group is main vocalist because damnnnn
            those vocals. {'\n'}
            {'\t'}Her nicknames are “God Jihyo” because she’s that wise and amazing,
            and “Thomas”, because she looks like Thomas the tank engine {'\n'}
            {'\t'}She’s always elegant, always. She studied ballet for 11 years, tbh I
            could watch her dance for hours. And she has the cutest little laugh,
            a mesmerizing voice and a beautiful gummy smile.{'\n'}
        </Text>
        
        <View style={styles.cont}>
          <Text style={styles.prof}>DAHYUN</Text>
          <Image
            style={styles.image}
            source={{ uri: 'https://64.media.tumblr.com/a9cc790b124f8658d289d31d0410c701/tumblr_pqui4hmX5m1r3hdhfo5_r1_250.gifv'}}/>
        </View>
        <Text style={styles.text}>
          {'\t'}Dahyun is by far the goofiest member of the group, she’s quite unique.
          Never running away from a challenge, especially if it’s to dance in
          the middle of the room like an insane person 😂 To give you a little
          example of that uniqueness, for her first showcase on Sixteen she
          rapped while making fart sounds with her hands, and it was
          magnificent. She is always sooo much fun to watch. She’s also a very
          caring person who pretends to hate pda but secretly she loves it.{' '}
          {'\n'}
          {'\t'}Her positions in the group are lead rapper and vocalist. She also
          plays the piano beautifully. {'\n'}
          {'\t'}Her nicknames are Dubu and Eagle - Dubu (tofu) because she’s pale and
          squishy like tofu. {'\n'}
        </Text>

        <View style={styles.cont}>
          <Text style={styles.prof}>CHAEYOUNG</Text>
          <Image
            style={styles.image}
            source={{ uri: 'https://data.whicdn.com/images/324432107/original.gif' }}/>
        </View>
        <Text style={styles.text}>
          {'\t'}She’s considered to be the baby of the group mainly because she’s very
          small, has a cute dimple, and you just want squish her, sing her a
          lullaby and rock her to sleep. She’s a little cutie pie who can turn
          into a motherfucking rapper. {'\n'}
          {'\t'}She’s also very good at drawing, it’s one of her favorite hobby.
          Members very often sweetly make fun of her height, and tbh I hope she
          never grows up. {'\n'}
          {'\t'}Her and Jeongyeon are called the “no jam sisters” because they laugh
          at their own bad jokes . {'\n'}
          {'\t'}Her positions in the group are main rapper and vocalist. {'\n'}
          {'\t'}Her nickname are “Strawberry princess” because she loves strawberries,
          and “Baby beast”, because under that baby face hides a fierce young
          woman. {'\n'}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    paddingBottom: 20,
  },
  image: {
    width: 230,
    height: 170,
    alignSelf: 'center',
  },
  prof: {
    textAlign: 'center',
    fontSize: 16,
    color: 'blue',
    paddingTop: 10,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'justify',
    fontSize: 15,
    lineHeight: 25,
    color: '#800000',
    paddingHorizontal: 25,
  },
  cont: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
