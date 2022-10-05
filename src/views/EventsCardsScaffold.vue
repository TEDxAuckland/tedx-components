<template>
  <div id="app">

  <section>
    <h1>Small card</h1>
    <SmallCard :item="mockEventSmall" :width="320" :height="320" />
    <br/>
    <br/>
    <h1>Big card</h1>
    <BigCard :item="mockEventBig" :width="640" :height="640" />
  </section>

  </div>
</template>

<script>
import SmallCard from '@/components/EventCardSmall.vue'
import BigCard from '@/components/EventCardBig.vue'

// TODO: fix this mock data
const mockEventSmall = 	{
  "date": "2022-08-18 19:26:51 +1200",
  "title": "Together",
  "categories": [],
  "output": null,
  "path": "_events/jun-2022.md",
  "id": "/events/jun-2022",
  "relative_path": "_events/jun-2022.md",
  "url": "/events/jun-2022/",
  "tags": [],
  "collection": "events",
  "excerpt": "<h2 id=\"tedxauckland-together\">TEDxAuckland <em>together</em></h2>\n",
  "draft": false,
  "layout": "event",
  "_schema": "default",
  "short_title": "JUN 2022",
  "upcoming": false,
  "ticket_sales": {"link":{"active":false,"src":"https://tedxauckland.com/community/events#/june-2022/tickets/purchase"},"embed":{"active":false,"code":null},"application":{"active":false,"link":null}},
  "image": "/uploads/web-page-banner-x3200-2.png",
  "tagline": "together",
  "start_date": "2022-06-08 00:00:00 +1200",
  "end_date": "2022-06-08 00:00:00 +1200",
  "address": "138 Halsey Street, Auckland 1010",
  "hide_speaker_names": false,
  "people": ["dallas-abel","ellen-joan-nelson","eric-renick","jim-lynch","will-hewitt"],
  "flikr_galleries": [null],
  "major_partners": ["vodafone"],
  "supporting_partners": ["generator","halcyon-digital"],
  "event_partners": ["motuihe-group","jw-legal","sound_techniques","cloudcannon","qt-auckland","free-range-chef","good-george"],
  "carousel_images": [{"image":null,"alt":null}],
  "highlight_video_id": null,
  "youtube_playlist": null,
  "other_youtube_playlist_title": null,
  "other_youtube_playlist": null,
  "permalink": null,
  "seo": {"name":"TEDxAuckland","type":"Event","links":[null]},
  "slug": "jun-2022",
  "ext": ".md",
  "raw_content": "## TEDxAuckland *together*\n\nJoin us for TEDxAuckland *together*, a special evening event where five speakers will take centre stage. We're embracing 2022 with a sense of unity as we bring together ideas that will inspire us and showcase great speakers making the future better.\n\nWe'll be hosted by the gorgeous ASB Waterfront Theatre where the break will provide ample opportunities to meet fellow attendees, taste delicious food prepared by local Chefs, discuss the talks and make new connections.\n\nTickets are limited so be quick. Come alone, or bring a friend, either way let's get *together*.\n\n**WEDNESDAY 8th JUNE 2022**<br>**WATERFRONT THEATRE, WYNYARD QUARTER**\n\n#### Event Schedule\n\n4:00pm Registration Opens<br>5:00pm MC kicks off event<br>SESSION 1<br>*Break - Special meal*<br>SESSION 2 END 7:00pm<br>AFTER PARTY\\!\n",
  "is_highlighted": false
};

const mockEventBig = {
  "date": "2022-08-18 19:26:51 +1200",
  "title": "tūmanako: Nov 2019",
  "categories": [],
  "output": null,
  "path": "_events/tedxauckland-tūmanako.md",
  "id": "/events/tedxauckland-tūmanako",
  "relative_path": "_events/tedxauckland-tūmanako.md",
  "url": "/events/tumanako/",
  "tags": [],
  "collection": "events",
  "excerpt": "<h1 id=\"tedxauckland-november-2019\">TEDxAuckland November 2019</h1>\n",
  "draft": false,
  "layout": "event-tumanako",
  "_schema": null,
  "short_title": "tūmanako: Nov 2019",
  "upcoming": false,
  "ticket_sales": {"link":{"active":false,"src":null},"embed":{"active":false,"code":null},"application":{"active":false,"link":"https://tedxauckland.com/community/events#/tumanako/buy-tickets"}},
  "image": "/uploads/tumanako-theme.svg",
  "tagline": null,
  "start_date": "2019-11-16 00:00:00 +1300",
  "end_date": "2019-11-16 00:00:00 +1300",
  "address": "138 Halsey St, Auckland CBD, Auckland",
  "hide_speaker_names": null,
  "people": ["brianna-fruean","thomas-owen","dmitry-selitskiy","kris-gledhill","simon-che-de-boer","sonya-renee-taylor","scenes-from-a-yellow-peril","rose-northey","angela-lim","andrea-reid","annamarie-jamieson","max-rashbrooke","tony-fernando","getrude-matshe-kanicki"],
  "flikr_galleries": [null],
  "major_partners": ["vodafone"],
  "supporting_partners": ["bizdojo","bnz"],
  "event_partners": ["lowndes_jordan","cloudcannon","halcyon-digital","sound_techniques","white-studios","allpress","blue-star","wear"],
  "carousel_images": null,
  "highlight_video_id": null,
  "youtube_playlist": "PLcm2pIIAwlDtVUwKpkWM0Fwl7GNNVkSpA",
  "other_youtube_playlist_title": null,
  "other_youtube_playlist": null,
  "permalink": "/events/tumanako/",
  "seo": {"name":"TEDxAuckland","type":"Event","links":[null]},
  "slug": "tedxauckland-tūmanako",
  "ext": ".md",
  "raw_content": "# TEDxAuckland November 2019\n\n*tūmanako*\\: to hope for a better future\n\nTEDxAuckland is taking over 'ASB Waterfront Theatre' for a full day of talks, performances, inspiration, and new connections.\n\nThe event is fully catered so just bring your lovely self and maybe someone else\\!\n\nFind the growing list of speakers below.\n\n~~Early Bird tickets $99<br>General Release tickets $129~~<br>~~Late Bird $159~~\n\n**When:** Saturday 16 November 2019, midday - 5:30pm\n\nDoors & registration opens at 10:30am<br><br>**Where:** ASB Waterfront Theatre\n",
  "is_highlighted": true
};

export default {
  name: 'app',

  components: {
    SmallCard,
    BigCard,
  },

  data() {
    return {
      mockEventSmall,
      mockEventBig,
    }
  }
}

</script>