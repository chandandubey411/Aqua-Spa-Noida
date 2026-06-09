// Gallery data - 50 images organized by category
const spaImages = [
  // Spa Rooms (1-10)
  { id: 1, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=70', title: 'Luxury Treatment Suite', width: 800, height: 600 },
  { id: 2, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&q=70', title: 'Relaxation Lounge', width: 800, height: 1000 },
  { id: 3, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=70', title: 'Candlelit Ambiance', width: 800, height: 600 },
  { id: 4, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&q=70', title: 'Premium Suite Interior', width: 800, height: 800 },
  { id: 5, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=70', title: 'Zen Meditation Room', width: 800, height: 600 },
  { id: 6, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70', title: 'Hydrotherapy Pool', width: 800, height: 1000 },
  { id: 7, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=70', title: 'Wellness Reception', width: 800, height: 600 },
  { id: 8, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77b?w=400&q=70', title: 'Steam Room', width: 800, height: 800 },
  { id: 9, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1564592895741-e4bd6cd72d4f?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1564592895741-e4bd6cd72d4f?w=400&q=70', title: 'Private Cabana', width: 800, height: 600 },
  { id: 10, category: 'Spa Rooms', url: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&q=70', title: 'Couples Suite', width: 800, height: 1000 },

  // Massage (11-20)
  { id: 11, category: 'Massage', url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=70', title: 'Swedish Massage', width: 800, height: 600 },
  { id: 12, category: 'Massage', url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=70', title: 'Deep Tissue Therapy', width: 800, height: 800 },
  { id: 13, category: 'Massage', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70', title: 'Hot Stone Massage', width: 800, height: 600 },
  { id: 14, category: 'Massage', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=70', title: 'Acupressure Treatment', width: 800, height: 1000 },
  { id: 15, category: 'Massage', url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=70', title: 'Thai Massage', width: 800, height: 600 },
  { id: 16, category: 'Massage', url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=70', title: 'Sports Recovery Massage', width: 800, height: 800 },
  { id: 17, category: 'Massage', url: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=400&q=70', title: 'Prenatal Massage', width: 800, height: 600 },
  { id: 18, category: 'Massage', url: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&q=70', title: 'Foot Reflexology', width: 800, height: 1000 },
  { id: 19, category: 'Massage', url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=70', title: 'Lymphatic Drainage', width: 800, height: 600 },
  { id: 20, category: 'Massage', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=70', title: 'Signature Full Body', width: 800, height: 800 },

  // Facials (21-30)
  { id: 21, category: 'Facials', url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=70', title: 'Hydra Facial', width: 800, height: 600 },
  { id: 22, category: 'Facials', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=70', title: 'Anti-Aging Gold Treatment', width: 800, height: 1000 },
  { id: 23, category: 'Facials', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70', title: 'Scalp Treatment', width: 800, height: 600 },
  { id: 24, category: 'Facials', url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70', title: 'Dermal Infusion', width: 800, height: 800 },
  { id: 25, category: 'Facials', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=70', title: 'Brightening Facial', width: 800, height: 600 },
  { id: 26, category: 'Facials', url: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=400&q=70', title: 'Signature Glow Facial', width: 800, height: 1000 },
  { id: 27, category: 'Facials', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=70', title: 'LED Light Therapy', width: 800, height: 600 },
  { id: 28, category: 'Facials', url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=70', title: 'Deep Cleansing Facial', width: 800, height: 800 },
  { id: 29, category: 'Facials', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=70', title: 'Oxygen Facial', width: 800, height: 600 },
  { id: 30, category: 'Facials', url: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&q=70', title: 'Collagen Boost Facial', width: 800, height: 1000 },

  // Wellness (31-38)
  { id: 31, category: 'Wellness', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=70', title: 'Crystal Healing', width: 800, height: 600 },
  { id: 32, category: 'Wellness', url: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400&q=70', title: 'Aromatherapy Oils', width: 800, height: 800 },
  { id: 33, category: 'Wellness', url: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=400&q=70', title: 'Hydrotherapy Session', width: 800, height: 600 },
  { id: 34, category: 'Wellness', url: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=400&q=70', title: 'Mud Therapy', width: 800, height: 1000 },
  { id: 35, category: 'Wellness', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=70', title: 'Meditation Space', width: 800, height: 600 },
  { id: 36, category: 'Wellness', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=70', title: 'Seaweed Body Wrap', width: 800, height: 800 },
  { id: 37, category: 'Wellness', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=70', title: 'Body Scrub', width: 800, height: 600 },
  { id: 38, category: 'Wellness', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=70', title: 'Wellness Journey', width: 800, height: 1000 },

  // Couples (39-44)
  { id: 39, category: 'Couples', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=70', title: 'Couples Romance Package', width: 800, height: 600 },
  { id: 40, category: 'Couples', url: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&q=70', title: 'Couples Suite Relaxation', width: 800, height: 800 },
  { id: 41, category: 'Couples', url: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&q=70', title: 'Romantic Getaway', width: 800, height: 600 },
  { id: 42, category: 'Couples', url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70', title: 'Champagne & Roses Setup', width: 800, height: 1000 },
  { id: 43, category: 'Couples', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70', title: 'His & Hers Treatment', width: 800, height: 600 },
  { id: 44, category: 'Couples', url: 'https://images.unsplash.com/photo-1560750133-98c8d5afa1e8?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1560750133-98c8d5afa1e8?w=400&q=70', title: 'Romantic Jacuzzi', width: 800, height: 800 },

  // Facilities (45-50)
  { id: 45, category: 'Facilities', url: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=70', title: 'Infinity Pool & Spa', width: 800, height: 600 },
  { id: 46, category: 'Facilities', url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=70', title: 'Luxury Sauna', width: 800, height: 1000 },
  { id: 47, category: 'Facilities', url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=70', title: 'Relaxation Garden', width: 800, height: 600 },
  { id: 48, category: 'Facilities', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&q=70', title: 'Welcome Lounge', width: 800, height: 800 },
  { id: 49, category: 'Facilities', url: 'https://images.unsplash.com/photo-1564592895741-e4bd6cd72d4f?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1564592895741-e4bd6cd72d4f?w=400&q=70', title: 'Herbal Tea Bar', width: 800, height: 600 },
  { id: 50, category: 'Facilities', url: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77b?w=400&q=70', title: 'Outdoor Terrace', width: 800, height: 1000 },
];

export const galleryCategories = ['All', 'Spa Rooms', 'Massage', 'Facials', 'Wellness', 'Couples', 'Facilities'];

export const gallery = spaImages;
