import axios from "axios";

export const fetchAllData = async () => {
  try {
    const [
      heroData,
      toolsAndSkillsData,
      socialMediaData,
      technicalSkills,
      services,
      portfolio,
      testimonial,
      siteConfiguration,
      ownerInfo,
    ] = await Promise.all([
      axios.get("https://backend.omarbendary.com/api/head-section/"),
      axios.get("https://backend.omarbendary.com/api/tools-and-skills/"),
      axios.get("https://backend.omarbendary.com/api/social-media-platform/"),
      axios.get("https://backend.omarbendary.com/api/technical-skills/"),
      axios.get("https://backend.omarbendary.com/api/service/"),
      axios.get("https://backend.omarbendary.com/api/portfolio/"),
      axios.get("https://backend.omarbendary.com/api/testimonial/"),
      axios.get("https://backend.omarbendary.com/api/site-configuration/"),
      axios.get("https://backend.omarbendary.com/api/owner-info/"),
    ]);
    return {
      heroData: heroData.data,
      toolsAndSkillsData: toolsAndSkillsData.data,
      socialMediaData: socialMediaData.data,
      technicalSkills: technicalSkills.data,
      services: services.data,
      portfolio: portfolio.data,
      testimonial: testimonial.data,
      siteConfiguration: siteConfiguration.data,
      ownerInfo: ownerInfo.data,
    };
  } catch (err) {
    console.log("Error fetching hero data:", err);
    throw err;
  }
};
