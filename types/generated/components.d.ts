import type { Schema, Struct } from '@strapi/strapi';

export interface ActivitiesPlanActivitiesPlan extends Struct.ComponentSchema {
  collectionName: 'components_activities_plan_activities_plans';
  info: {
    displayName: 'Activities Plan';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface AllMustVisitsAllMustVisits extends Struct.ComponentSchema {
  collectionName: 'components_all_must_visits_all_must_visits';
  info: {
    displayName: 'AllMustVisits';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface BrandPerBrandPer extends Struct.ComponentSchema {
  collectionName: 'components_brand_per_brand_pers';
  info: {
    displayName: 'brandPer';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CuratedCurated extends Struct.ComponentSchema {
  collectionName: 'components_curated_curateds';
  info: {
    description: '';
    displayName: 'curated';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lottieJson: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    text: Schema.Attribute.String;
    textImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface DayInfoDayInfo extends Struct.ComponentSchema {
  collectionName: 'components_day_info_day_infos';
  info: {
    displayName: 'dayInfo';
  };
  attributes: {
    desc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface DayPlanDayPlan extends Struct.ComponentSchema {
  collectionName: 'components_day_plan_day_plans';
  info: {
    description: '';
    displayName: 'dayPlan';
  };
  attributes: {
    day: Schema.Attribute.String;
    desc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface DestinationBannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_destination_banner_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    desktopBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface DestinationCommunityCommunity extends Struct.ComponentSchema {
  collectionName: 'components_destination_community_communities';
  info: {
    displayName: 'community';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    link: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DestinationFeelsFeels extends Struct.ComponentSchema {
  collectionName: 'components_destination_feels_feels';
  info: {
    displayName: 'Feels';
  };
  attributes: {
    feelsLike: Schema.Attribute.Component<'feels-like.feels-like', true>;
    title: Schema.Attribute.String;
  };
}

export interface DestinationMustVisitsMustVisits
  extends Struct.ComponentSchema {
  collectionName: 'components_destination_must_visits_must_visits';
  info: {
    displayName: 'mustVisits';
  };
  attributes: {
    allMustVisits: Schema.Attribute.Component<
      'all-must-visits.all-must-visits',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface DestinationOverviewOverview extends Struct.ComponentSchema {
  collectionName: 'components_destination_overview_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    desc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface DestinationQuickQuickFacts extends Struct.ComponentSchema {
  collectionName: 'components_destination_quick_quick_facts';
  info: {
    displayName: 'quickFacts';
  };
  attributes: {
    quickComp: Schema.Attribute.Component<'quick-comp.quick-comp', true>;
    title: Schema.Attribute.String;
  };
}

export interface DestinationUniqueUniqueDestination
  extends Struct.ComponentSchema {
  collectionName: 'components_destination_unique_unique_destinations';
  info: {
    displayName: 'uniqueDestination';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    uniqueDesc: Schema.Attribute.Component<'unique-desc.unique-desc', true>;
  };
}

export interface DestinationYearYearUnfold extends Struct.ComponentSchema {
  collectionName: 'components_destination_year_year_unfolds';
  info: {
    description: '';
    displayName: 'Year Unfold';
  };
  attributes: {
    title: Schema.Attribute.String;
    yearUnfoldComp: Schema.Attribute.Component<
      'year-unfold-comp.year-unfold-comp',
      true
    >;
  };
}

export interface FaqCompFaqComp extends Struct.ComponentSchema {
  collectionName: 'components_faq_comp_faq_comps';
  info: {
    description: '';
    displayName: 'FaqComp';
  };
  attributes: {
    ans: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String;
  };
}

export interface FeelsLikeFeelsLike extends Struct.ComponentSchema {
  collectionName: 'components_feels_like_feels_likes';
  info: {
    displayName: 'feelsLike';
  };
  attributes: {
    desc: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HighlightsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_highlights_highlights';
  info: {
    description: '';
    displayName: 'Highlights';
  };
  attributes: {
    link: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeBannerHome extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_homes';
  info: {
    description: '';
    displayName: 'Home';
  };
  attributes: {
    bannerSlider: Schema.Attribute.Component<
      'slider-banner.slider-banner',
      true
    >;
    DesktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    DesktopVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    isVideo: Schema.Attribute.Boolean;
    MobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    MobileVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomeCuratedCuratedTrips extends Struct.ComponentSchema {
  collectionName: 'components_home_curated_curated_trips';
  info: {
    displayName: 'CuratedTrips';
  };
  attributes: {
    curated: Schema.Attribute.Component<'curated.curated', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomePersonalityPersonality extends Struct.ComponentSchema {
  collectionName: 'components_home_personality_personalities';
  info: {
    displayName: 'personality';
  };
  attributes: {
    brandPer: Schema.Attribute.Component<'brand-per.brand-per', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeTravellersTravellers extends Struct.ComponentSchema {
  collectionName: 'components_home_travellers_travellers';
  info: {
    description: '';
    displayName: 'Travellers';
  };
  attributes: {
    highlights: Schema.Attribute.Component<'highlights.highlights', true>;
    title: Schema.Attribute.String;
  };
}

export interface IconOverviewIcon extends Struct.ComponentSchema {
  collectionName: 'components_icon_overview_icons';
  info: {
    displayName: 'overviewIcon';
  };
  attributes: {
    iconImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ImageGalleryImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_image_gallery_image_galleries';
  info: {
    displayName: 'imageGallery';
  };
  attributes: {
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PlacePlace extends Struct.ComponentSchema {
  collectionName: 'components_place_places';
  info: {
    displayName: 'place';
  };
  attributes: {
    desc: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface PriceIconPriceIcon extends Struct.ComponentSchema {
  collectionName: 'components_price_icon_price_icons';
  info: {
    displayName: 'priceIcon';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface QuickCompQuickComp extends Struct.ComponentSchema {
  collectionName: 'components_quick_comp_quick_comps';
  info: {
    displayName: 'quickComp';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SliderBannerSliderBanner extends Struct.ComponentSchema {
  collectionName: 'components_slider_banner_slider_banners';
  info: {
    displayName: 'sliderBanner';
  };
  attributes: {
    desktopBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link: Schema.Attribute.String;
    mobileBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface TravellersReviewsTravellersReviews
  extends Struct.ComponentSchema {
  collectionName: 'components_travellers_reviews_travellers_reviews';
  info: {
    displayName: 'travellersReviews';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    star: Schema.Attribute.String;
  };
}

export interface TripActivitiesActivities extends Struct.ComponentSchema {
  collectionName: 'components_trip_activities_activities';
  info: {
    displayName: 'Activities';
  };
  attributes: {
    activitiesPlan: Schema.Attribute.Component<
      'activities-plan.activities-plan',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TripBannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_trip_banner_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    desktopBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface TripDayToDayDayToDay extends Struct.ComponentSchema {
  collectionName: 'components_trip_day_to_day_day_to_days';
  info: {
    description: '';
    displayName: 'DayToDay';
  };
  attributes: {
    dayInfo: Schema.Attribute.Component<'day-info.day-info', true>;
    dayPlan: Schema.Attribute.Component<'day-plan.day-plan', true>;
    reserveMySpot: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TripFaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_trip_faq_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    FaqComp: Schema.Attribute.Component<'faq-comp.faq-comp', true>;
    title: Schema.Attribute.String;
  };
}

export interface TripGalleryGallery extends Struct.ComponentSchema {
  collectionName: 'components_trip_gallery_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    imageGallery: Schema.Attribute.Component<
      'image-gallery.image-gallery',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TripOverviewOverview extends Struct.ComponentSchema {
  collectionName: 'components_trip_overview_overviews';
  info: {
    description: '';
    displayName: 'Overview';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    overviewIcon: Schema.Attribute.Component<'icon.overview-icon', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TripPlaceTotallyPlace extends Struct.ComponentSchema {
  collectionName: 'components_trip_place_totally_places';
  info: {
    displayName: 'TotallyPlace';
  };
  attributes: {
    place: Schema.Attribute.Component<'place.place', true>;
    title: Schema.Attribute.String;
  };
}

export interface TripPricePrice extends Struct.ComponentSchema {
  collectionName: 'components_trip_price_prices';
  info: {
    displayName: 'Price';
  };
  attributes: {
    desc: Schema.Attribute.String;
    priceIcon: Schema.Attribute.Component<'price-icon.price-icon', true>;
    title: Schema.Attribute.String;
  };
}

export interface TripReviewsReviews extends Struct.ComponentSchema {
  collectionName: 'components_trip_reviews_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    title: Schema.Attribute.String;
    travellersReviews: Schema.Attribute.Component<
      'travellers-reviews.travellers-reviews',
      true
    >;
  };
}

export interface TripWhatsappWhatsappCommunity extends Struct.ComponentSchema {
  collectionName: 'components_trip_whatsapp_whatsapp_communities';
  info: {
    description: '';
    displayName: 'WhatsappCommunity';
  };
  attributes: {
    desc: Schema.Attribute.String;
    lottie: Schema.Attribute.JSON;
    lottieJson: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    whatsappLink: Schema.Attribute.String;
  };
}

export interface UniqueDescUniqueDesc extends Struct.ComponentSchema {
  collectionName: 'components_unique_desc_unique_descs';
  info: {
    description: '';
    displayName: 'uniqueDesc';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    iconImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface YearUnfoldCompYearUnfoldComp extends Struct.ComponentSchema {
  collectionName: 'components_year_unfold_comp_year_unfold_comps';
  info: {
    displayName: 'yearUnfoldComp';
  };
  attributes: {
    date: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'activities-plan.activities-plan': ActivitiesPlanActivitiesPlan;
      'all-must-visits.all-must-visits': AllMustVisitsAllMustVisits;
      'brand-per.brand-per': BrandPerBrandPer;
      'curated.curated': CuratedCurated;
      'day-info.day-info': DayInfoDayInfo;
      'day-plan.day-plan': DayPlanDayPlan;
      'destination-banner.banner': DestinationBannerBanner;
      'destination-community.community': DestinationCommunityCommunity;
      'destination-feels.feels': DestinationFeelsFeels;
      'destination-must-visits.must-visits': DestinationMustVisitsMustVisits;
      'destination-overview.overview': DestinationOverviewOverview;
      'destination-quick.quick-facts': DestinationQuickQuickFacts;
      'destination-unique.unique-destination': DestinationUniqueUniqueDestination;
      'destination-year.year-unfold': DestinationYearYearUnfold;
      'faq-comp.faq-comp': FaqCompFaqComp;
      'feels-like.feels-like': FeelsLikeFeelsLike;
      'highlights.highlights': HighlightsHighlights;
      'home-banner.home': HomeBannerHome;
      'home-curated.curated-trips': HomeCuratedCuratedTrips;
      'home-personality.personality': HomePersonalityPersonality;
      'home-travellers.travellers': HomeTravellersTravellers;
      'icon.overview-icon': IconOverviewIcon;
      'image-gallery.image-gallery': ImageGalleryImageGallery;
      'place.place': PlacePlace;
      'price-icon.price-icon': PriceIconPriceIcon;
      'quick-comp.quick-comp': QuickCompQuickComp;
      'slider-banner.slider-banner': SliderBannerSliderBanner;
      'travellers-reviews.travellers-reviews': TravellersReviewsTravellersReviews;
      'trip-activities.activities': TripActivitiesActivities;
      'trip-banner.banner': TripBannerBanner;
      'trip-day-to-day.day-to-day': TripDayToDayDayToDay;
      'trip-faq.faq': TripFaqFaq;
      'trip-gallery.gallery': TripGalleryGallery;
      'trip-overview.overview': TripOverviewOverview;
      'trip-place.totally-place': TripPlaceTotallyPlace;
      'trip-price.price': TripPricePrice;
      'trip-reviews.reviews': TripReviewsReviews;
      'trip-whatsapp.whatsapp-community': TripWhatsappWhatsappCommunity;
      'unique-desc.unique-desc': UniqueDescUniqueDesc;
      'year-unfold-comp.year-unfold-comp': YearUnfoldCompYearUnfoldComp;
    }
  }
}
