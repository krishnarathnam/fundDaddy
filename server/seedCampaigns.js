const mongoose = require('mongoose');
const Campaign = require('./models/campaign');
require('dotenv').config();

const campaigns = [
  {
    title: "Community Garden Initiative",
    description: "Help us create a sustainable community garden in downtown area",
    targetAmount: 5000,
    category: "Community",
    location: "Downtown",
    endDate: new Date("2024-12-31"),
    status: "active",
    raisedAmount: 2500,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
  },
  {
    title: "Tech Education for Youth",
    description: "Providing coding classes for underprivileged youth",
    targetAmount: 10000,
    category: "Education",
    location: "Tech Hub",
    endDate: new Date("2024-11-30"),
    status: "active",
    raisedAmount: 7500,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  },
  {
    title: "Beach Cleanup Project",
    description: "Organizing weekly beach cleanup events",
    targetAmount: 3000,
    category: "Environment",
    location: "Coastal Area",
    endDate: new Date("2024-10-31"),
    status: "active",
    raisedAmount: 1500,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Medical Supplies for Rural Clinic",
    description: "Providing essential medical supplies to rural healthcare centers",
    targetAmount: 15000,
    category: "Healthcare",
    location: "Rural Area",
    endDate: new Date("2024-09-30"),
    status: "active",
    raisedAmount: 8000,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
  },
  {
    title: "Local Art Exhibition",
    description: "Supporting local artists with a community art exhibition",
    targetAmount: 8000,
    category: "Arts",
    location: "Art District",
    endDate: new Date("2024-08-31"),
    status: "active",
    raisedAmount: 4000,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
  },
  {
    title: "Youth Sports Program",
    description: "Funding sports equipment and training for youth teams",
    targetAmount: 12000,
    category: "Sports",
    location: "Community Center",
    endDate: new Date("2024-07-31"),
    status: "active",
    raisedAmount: 6000,
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e"
  },
  {
    title: "Emergency Relief Fund",
    description: "Supporting families affected by recent natural disasters",
    targetAmount: 25000,
    category: "Emergency",
    location: "Multiple Locations",
    endDate: new Date("2024-06-30"),
    status: "active",
    raisedAmount: 15000,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
  },
  {
    title: "Small Business Grant",
    description: "Supporting local entrepreneurs with startup funding",
    targetAmount: 20000,
    category: "Business",
    location: "Business District",
    endDate: new Date("2024-05-31"),
    status: "active",
    raisedAmount: 10000,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    title: "Music Education Program",
    description: "Providing musical instruments and lessons to schools",
    targetAmount: 15000,
    category: "Education",
    location: "City Schools",
    endDate: new Date("2024-04-30"),
    status: "active",
    raisedAmount: 7500,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
  },
  {
    title: "Urban Farming Initiative",
    description: "Creating rooftop gardens in urban areas",
    targetAmount: 18000,
    category: "Environment",
    location: "Urban Centers",
    endDate: new Date("2024-03-31"),
    status: "active",
    raisedAmount: 9000,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
  },
  {
    title: "Mental Health Support",
    description: "Funding mental health programs for youth",
    targetAmount: 20000,
    category: "Healthcare",
    location: "Community Centers",
    endDate: new Date("2024-02-29"),
    status: "active",
    raisedAmount: 12000,
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
  },
  {
    title: "Theater Production",
    description: "Supporting local theater group's new production",
    targetAmount: 12000,
    category: "Arts",
    location: "Theater District",
    endDate: new Date("2024-01-31"),
    status: "active",
    raisedAmount: 6000,
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf"
  },
  {
    title: "Swimming Lessons",
    description: "Providing free swimming lessons for children",
    targetAmount: 8000,
    category: "Sports",
    location: "Community Pool",
    endDate: new Date("2024-12-31"),
    status: "active",
    raisedAmount: 4000,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635"
  },
  {
    title: "Food Bank Support",
    description: "Expanding food bank operations to serve more families",
    targetAmount: 30000,
    category: "Emergency",
    location: "Multiple Locations",
    endDate: new Date("2024-11-30"),
    status: "active",
    raisedAmount: 15000,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  {
    title: "Tech Startup Incubator",
    description: "Supporting innovative tech startups",
    targetAmount: 50000,
    category: "Business",
    location: "Tech Park",
    endDate: new Date("2024-10-31"),
    status: "active",
    raisedAmount: 25000,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    title: "Library Renovation",
    description: "Modernizing the local library with new facilities",
    targetAmount: 25000,
    category: "Education",
    location: "Public Library",
    endDate: new Date("2024-09-30"),
    status: "active",
    raisedAmount: 12500,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
  },
  {
    title: "Wildlife Conservation",
    description: "Protecting local wildlife habitats",
    targetAmount: 35000,
    category: "Environment",
    location: "Nature Reserve",
    endDate: new Date("2024-08-31"),
    status: "active",
    raisedAmount: 17500,
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5"
  },
  {
    title: "Mobile Health Clinic",
    description: "Bringing healthcare services to remote areas",
    targetAmount: 40000,
    category: "Healthcare",
    location: "Rural Areas",
    endDate: new Date("2024-07-31"),
    status: "active",
    raisedAmount: 20000,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
  },
  {
    title: "Public Art Installation",
    description: "Creating interactive public art in the city center",
    targetAmount: 15000,
    category: "Arts",
    location: "City Center",
    endDate: new Date("2024-06-30"),
    status: "active",
    raisedAmount: 7500,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
  },
  {
    title: "Youth Soccer League",
    description: "Organizing a youth soccer league with proper equipment",
    targetAmount: 10000,
    category: "Sports",
    location: "Sports Complex",
    endDate: new Date("2024-05-31"),
    status: "active",
    raisedAmount: 5000,
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e"
  }
];

const seedCampaigns = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/fundDaddy');
    console.log('Connected to MongoDB');

    // Clear existing campaigns
    await Campaign.deleteMany({});
    console.log('Cleared existing campaigns');

    // Add new campaigns
    const createdCampaigns = await Campaign.insertMany(campaigns);
    console.log(`Successfully added ${createdCampaigns.length} campaigns`);

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding campaigns:', error);
    process.exit(1);
  }
};

seedCampaigns(); 