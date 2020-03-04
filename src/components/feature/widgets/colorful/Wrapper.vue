<template>
  <StyledWrapper>
    <PageTitle section="Widgets">Colorful</PageTitle>
    <div class="row">
      <div class="col-sm-6 col-lg-3" v-for="card in headlines" :key="card.id">
        <GradientHeadlineCard :card="card" />
      </div>
    </div>
    <ContentHeader>Blog Widgets</ContentHeader>
    <div class="row">
      <div class="col-lg-4" v-for="card in blogs" :key="card.id">
        <BlogCard :card="card" />
      </div>
    </div>
    <ContentHeader>Misc</ContentHeader>
    <div class="row">
      <div class="col-lg-8">
        <ProfileImageList />
        <div class="row">
          <div class="col-lg-6">
            <ArticleCard />
            <NewsletterCard />
          </div>
          <div class="col-lg-6">
            <CarouselCard />

            <div class="row">
              <div class="col-6">
                <GradientIconCard
                  gradient="Blue"
                  cardValue="254"
                  cardTitle="Unread"
                />
              </div>
              <div class="col-6">
                <GradientStatCard
                  gradient="Purple"
                  cardValue="624"
                  cardDescription="+21 This month"
                  cardFooter="Pictures"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <SubscribeCard gradient="Purple" />

        <div class="row">
          <div class="col-6">
            <IconCard
              backgroundColor="White"
              textColor="Accent"
              icon="ti-Line-Camera-1"
              label="Images"
            />
          </div>
          <div class="col-6">
            <IconCard
              backgroundColor="Secondary"
              textColor="WhiteAlways"
              icon="ti-Line-Battery"
              label="Battery Status"
            />
          </div>
        </div>

        <ProfileCard />
      </div>
    </div>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { PageTitle, ContentHeader } from "../../../shared/page";
import GradientHeadlineCard from "./cards/gradientHeadlineCard/Wrapper";
import BlogCard from "./cards/blogCard/Wrapper";
import NewsletterCard from "./cards/newsletterCard/Wrapper";

import CarouselCard from "./cards/carouselCard/Wrapper";
import GradientStatCard from "./cards/gradientStatCard/Wrapper";
import GradientIconCard from "./cards/gradientIconCard/Wrapper";
import IconCard from "./cards/iconCard/Wrapper";
import ArticleCard from "./cards/articleCard/Wrapper";
import SubscribeCard from "./cards/subscribeCard/Wrapper";
import ProfileCard from "./cards/profileCard/Wrapper";
import ProfileImageList from "./cards/profileImageList/Wrapper";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    PageTitle,
    ContentHeader,
    GradientHeadlineCard,
    BlogCard,
    NewsletterCard,
    CarouselCard,
    GradientStatCard,
    GradientIconCard,
    IconCard,
    ArticleCard,
    SubscribeCard,
    ProfileCard,
    ProfileImageList
  },
  data: function() {
    return {
      blogs: [
        {
          id: 1,
          title: "Fashion",
          text:
            "Fashion is a popular style, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle and body.",
          name: "bob",
          likes: 340,
          messages: 80,
          image: require("../../../../assets/images/blog1.jpg")
        },
        {
          id: 2,
          title: "Apple News",
          text:
            "More than 40% users have reported their new phones won't charge when plugged into lightning cables.",
          name: "benik",
          likes: 340,
          messages: 80,
          image: require("../../../../assets/images/blog2.jpg")
        },
        {
          id: 3,
          title: "Twitter Brings Its 'Data Saver'",
          text:
            "Microblogging site Twitter has rolled out its latest update for Android and iOS users with the 'data saver' twitter.",
          name: "raymond",
          likes: 340,
          messages: 80,
          image: require("../../../../assets/images/blog3.jpg")
        }
      ],
      headlines: [
        {
          id: 1,
          title: "Orders",
          value: "34",
          valueLabel: "New",
          gradient: "Blue",
          total: "6,000,000",
          icon: "add_shopping_cart"
        },
        {
          id: 2,
          title: "Clients",
          value: "21",
          valueLabel: "New",
          gradient: "Pink",
          total: "1,124,000",
          icon: "person"
        },
        {
          id: 3,
          title: "Sales",
          value: "80$",
          valueLabel: "Growth",
          gradient: "Yellow",
          total: "342,000",
          icon: "timeline"
        },
        {
          id: 4,
          title: "Profit",
          value: "$2000",
          valueLabel: "Today",
          gradient: "Green",
          total: "6,000,000",
          icon: "attach_money"
        }
      ]
    };
  }
};
</script>
