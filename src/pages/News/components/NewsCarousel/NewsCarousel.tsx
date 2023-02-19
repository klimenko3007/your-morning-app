import NewsCard from '../NewsCard';
import Box from '@mui/material/Box';

const data = [
  {
    id: 'world/2023/feb/18/chinese-peace-plan-for-ukraine-greeted-cautiously-by-the-west',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T20:00:06Z',
    webTitle: 'Chinese peace plan for Ukraine greeted cautiously by the west',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/18/chinese-peace-plan-for-ukraine-greeted-cautiously-by-the-west',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/18/chinese-peace-plan-for-ukraine-greeted-cautiously-by-the-west',
    fields: {
      trailText:
        'China’s senior diplomat Wang Yi speaks of need to uphold principle of territorial integrity but also of respecting Russia’s ‘legitimate security interests’',
      thumbnail:
        'https://media.guim.co.uk/a607025386e3f5eac083d3fce4052bc06c778e7d/0_68_4000_2400/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/2023/feb/18/florida-abortion-law-couple-birth',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T19:51:28Z',
    webTitle:
      'Florida couple unable to get abortion will see baby die after delivery',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/18/florida-abortion-law-couple-birth',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/18/florida-abortion-law-couple-birth',
    fields: {
      trailText:
        'Doctors’ interpretation of state law prevents procedure, family tells Washington Post, despite baby’s fatal illness',
      thumbnail:
        'https://media.guim.co.uk/caeaa3373d2aa9e98e49fbc5eb37d8d5c7bfe5fe/67_0_4066_2440/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/2023/feb/19/annihilating-for-survivors-the-catholic-church-and-its-plaques-to-abuse-perpetrators',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T19:00:05Z',
    webTitle:
      '‘Annihilating for survivors’: the Catholic church and its plaques to abuse perpetrators',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/19/annihilating-for-survivors-the-catholic-church-and-its-plaques-to-abuse-perpetrators',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/19/annihilating-for-survivors-the-catholic-church-and-its-plaques-to-abuse-perpetrators',
    fields: {
      trailText:
        'Across Australia child sexual abuse survivors have to contend with church memorials to their abusers and those who protected them',
      thumbnail:
        'https://media.guim.co.uk/3fc09f7d6f087f845a7eac59128ecd5589d2fa34/0_163_4896_2938/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/live/2023/feb/18/russia-ukraine-war-biden-will-send-message-to-putin-in-war-anniversary-speech-live',
    type: 'liveblog',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T18:52:39Z',
    webTitle:
      'Sunak urges allies to ‘double down’ on military support – as it happened',
    webUrl:
      'https://www.theguardian.com/world/live/2023/feb/18/russia-ukraine-war-biden-will-send-message-to-putin-in-war-anniversary-speech-live',
    apiUrl:
      'https://content.guardianapis.com/world/live/2023/feb/18/russia-ukraine-war-biden-will-send-message-to-putin-in-war-anniversary-speech-live',
    fields: {
      trailText:
        'In a speech to Munich security conference, UK prime minister says west must not ‘falter in its resolve’',
      thumbnail:
        'https://media.guim.co.uk/9136fde436cd4686e7cc611a7cc5c0cc06370a52/0_449_7983_4793/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/2023/feb/18/romanian-doctors-face-investigation-over-reuse-of-implants-from-corpses',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T16:13:04Z',
    webTitle:
      'Romanian doctors face investigation over reuse of implants from corpses',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/18/romanian-doctors-face-investigation-over-reuse-of-implants-from-corpses',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/18/romanian-doctors-face-investigation-over-reuse-of-implants-from-corpses',
    fields: {
      trailText:
        'Prosecutors allege one medic taken into custody performed 238 procedures over a seven-year period',
      thumbnail:
        'https://media.guim.co.uk/e3ab03b5f56a2945257e814b0f4e5b4050ce1b37/0_0_4000_2400/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/2023/feb/18/israeli-spring-protests-netanyahu-leave-palestinian-citizens-in-the-cold',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T16:00:01Z',
    webTitle:
      'Wave of ‘Israeli spring’ protests leaves Palestinian citizens out in the cold',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/18/israeli-spring-protests-netanyahu-leave-palestinian-citizens-in-the-cold',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/18/israeli-spring-protests-netanyahu-leave-palestinian-citizens-in-the-cold',
    fields: {
      trailText:
        'Arab minority has been alienated by united opposition against judicial reforms by Benjamin Netanyahu’s coalition',
      thumbnail:
        'https://media.guim.co.uk/af5300901100ceac8212f94fd103e0fc341c4bd8/0_352_5308_3185/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/2023/feb/18/eu-must-jointly-purchase-weapons-to-foil-putins-plans-says-von-der-leyen-ukraine',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T15:10:00Z',
    webTitle:
      'Sunak urges Europe to use weapons stockpiles to help Ukraine war',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/18/eu-must-jointly-purchase-weapons-to-foil-putins-plans-says-von-der-leyen-ukraine',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/18/eu-must-jointly-purchase-weapons-to-foil-putins-plans-says-von-der-leyen-ukraine',
    fields: {
      trailText:
        'UK prime minister says Kyiv needs more ammunition, air defence, heavy armoury and longer range weapons',
      thumbnail:
        'https://media.guim.co.uk/7189978d4027a9217e8fa46b714f5c8b1ba41065/0_116_4246_2548/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/2023/feb/18/one-year-after-start-of-war-what-lies-ahead-for-ukraine',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T13:00:39Z',
    webTitle: 'One year after the start of war, what lies ahead for Ukraine? ',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/18/one-year-after-start-of-war-what-lies-ahead-for-ukraine',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/18/one-year-after-start-of-war-what-lies-ahead-for-ukraine',
    fields: {
      trailText:
        'It’s a year since Vladimir Putin’s savage invasion began. The west has been Kyiv’s arsenal and banker but what role would it play in a conflict that could last generations?<strong>• Russia-Ukraine war: latest news updates</strong>',
      thumbnail:
        'https://media.guim.co.uk/aabfde1ccb9b20dbcecad7b3a0eee03162f2481a/0_0_2200_1320/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/2023/feb/18/cambridge-analytica-staff-leaked-emails-team-jorge-nigeria-election-sam-patten-tal-hanan',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T12:00:38Z',
    webTitle:
      ' Revealed: the US adviser who tried to swing Nigeria’s 2015 election',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/18/cambridge-analytica-staff-leaked-emails-team-jorge-nigeria-election-sam-patten-tal-hanan',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/18/cambridge-analytica-staff-leaked-emails-team-jorge-nigeria-election-sam-patten-tal-hanan',
    fields: {
      trailText:
        'Sam Patten, an American consultant later mired in controversy, exploited emails obtained by Tal Hanan’s team',
      thumbnail:
        'https://media.guim.co.uk/ae8745de44c53a9aed25bc7fbd8edf7db6165e33/0_0_5000_3000/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'world/2023/feb/18/us-reaction-to-balloon-absurd-and-hysterical-says-top-chinese-diplomat',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-02-18T11:40:51Z',
    webTitle:
      'US reaction to balloon ‘absurd and hysterical’, says top Chinese diplomat',
    webUrl:
      'https://www.theguardian.com/world/2023/feb/18/us-reaction-to-balloon-absurd-and-hysterical-says-top-chinese-diplomat',
    apiUrl:
      'https://content.guardianapis.com/world/2023/feb/18/us-reaction-to-balloon-absurd-and-hysterical-says-top-chinese-diplomat',
    fields: {
      trailText:
        'Wang Yi also says China is preparing to outline position on Russian war against Ukraine',
      thumbnail:
        'https://media.guim.co.uk/c1e4f172eeea4c546cbdc56b241e1b8653e3372d/0_51_4704_2822/500.jpg',
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
];

const NewsCarousel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'auto',
        gap: '14px',
        scrollSnapType: 'x mandatory',
        paddingBottom: '5px',
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <NewsCard key={item.id} item={item}></NewsCard>
      ))}
    </Box>
  );
};

export default NewsCarousel;
