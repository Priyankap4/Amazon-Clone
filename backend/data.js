import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Elena',
            email: 'ana@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
              name: 'Basic Spices',
              logo: '/images/spices.jpg',
              description: 'best seller',
              rating: 4.5,
              numReviews: 120,
            },
        },
        {
            name: 'John',
            email: 'user@email.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: `Chef's Basket Pasta Box, Cheesy Alfredo, 237g`,
            category: `Common Pantry Staples`,
            image: `https://images-na.ssl-images-amazon.com/images/I/71uprJ4rTML._SL1500_.jpg`,
            description: `This is a Vegetarian product.
            Cooks in 10 minutes.
            Contains pasta, sauce and seasonings.
            100% natural ingredients.
            Single serving pack.`,
            price: 90,
            countInStock: 10,
            rating: 4.0,
            numReviews: 10,
        },
        {
            name: `Vegetable Soup, 10.5 oz. Can (Pack of 12)`,
            category: `Common Pantry Staples`,
            image: `https://images-na.ssl-images-amazon.com/images/I/81eA9QKS4pL._SL1500_.jpg`,
            description: `Made with honest ingredients like farm-grown carrots, potatoes and corn.
            Packaged in a non-BPA-lined, 10.5 oz.
            Excellent source of Vitamin A.
            A soup that's perfect for vegetarians.
            Count on these timeless flavors to satisfy.`,
            price: 2999,
            countInStock: 20,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `MuscleBlaze High Protein Cereal, Unflavoured / 2.2 lb / 1 kg`,
            category: `Common Pantry Staples`,
            image: `https://images-na.ssl-images-amazon.com/images/I/717xHtQrOfL._SL1500_.jpg`,
            description: `A bowlful of nutritious MuscleBlaze High Protein Cereal can be consumed at any time of the day.
            Get 16g protein per serving of MuscleBlaze High Protein Cereal mixed with 250ml milk, higher than any other cereal in the market
            Keeps you satiated.
            Rich in antioxidants.
            No added sugar and zero fat in MuscleBlaze High Protein Cereal make it a wonderful any time snack.`,
            price: 561,
            countInStock: 10,
            rating: 4.0,
            numReviews: 10,
        },
        {
            name: `Sports Mixed Nuts and Dry Fruit - 350g`,
            category: `Common Pantry Staples`,
            image: `https://images-na.ssl-images-amazon.com/images/I/71H8N3F7scL._SL1488_.jpg`,
            description: `HOW TO EAT: Snack on it at any time! A great snack to have before or after a workout, yoga class, sports activities. Healthy snacking option for kids' lunchboxes. Add to salads, smoothies, yogurt or oats!`,
            price: 499,
            countInStock: 3,
            rating: 4.0,
            numReviews: 10,
        },
        {
            name: `Green Giant Mushrooms Pieces & Stems, 4 Ounce Can`,
            category: `Common Pantry Staples`,
            image: `https://images-na.ssl-images-amazon.com/images/I/81lPyD-mbvL._SL1500_.jpg`,
            description: `Delicious flavor when grilled or sauteed.
            Makes a great side dish.
            Great for pasta and salads.
            All natural ingredients.
            Fat-free.`,
            price: 799,
            countInStock: 40,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `Amul Butter - Pasteurised, 500g`,
            category: `Common Pantry Staples`,
            image: `https://images-na.ssl-images-amazon.com/images/I/71fXzNqJEjL._SL1500_.jpg`,
            description: `Spread on Bread, Parantha, Roti, Nans, Sandwiches
            Topping : Pav Bhaji, Dals, Soups, Salads, Rice.
            Cooking Medium : Butter Paneer Masala, Butter Corn Masala and thousands of delightful recipes.
            Pure vegetarian.`,
            price: 230,
            countInStock: 0,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `NutroActive Baking SODA Ultra Pure 350 gm`,
            category: `Baking Pantry Items`,
            image: `https://images-na.ssl-images-amazon.com/images/I/61dKrJIzFKL._SL1200_.jpg`,
            description: `Baking soda is a magical powder which has got several amazing usage like cooking, baking, home remedies, cleaning kitchen or bathroom, washing clothes, personal care, deodorizer for refrigerator etc. It helps to remove bad odours and good for your health too.`,
            price: 283,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `BAKE KING Baking Powder 200G`,
            category: `Baking Pantry Items`,
            image: `https://images-na.ssl-images-amazon.com/images/I/71wYnKqon1L._SL1500_.jpg`,
            description: `Baking powder is used to increase the volume and lighten the texture of baked goods`,
            price: 400,
            countInStock: 15,
            rating: 4.0,
            numReviews: 10,
        },
        {
            name: `24 Mantra Organic Corn Flour, 500g`,
            category: `Baking Pantry Items`,
            image: `https://images-na.ssl-images-amazon.com/images/I/71PfbI7BmoL._SL1500_.jpg`,
            description: `Thickens a liquid dish.
            Rich in carbohydrates.
            Provides with vitamin A.
            Gluten free flour.
            Used for frying items.`,
            price: 55,
            countInStock: 10,
            rating: 4.0,
            numReviews: 10,
        },
        {
            name: `24 Mantra Organic Jaggery Powder, 500 grams`,
            category: `Baking Pantry Items`,
            image: `https://images-na.ssl-images-amazon.com/images/I/71PfbI7BmoL._SL1500_.jpg`,
            description: `100 % Organic.
            Grown without synthetic Pesticides.
            Grown without synthetic GMOs.
            Unadulterated.
            Source of energy.
            Natural delicious sweetener.
            Source of a minor amount of few micronutrients.
            Easy to use.`,
            price: 75,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `Hershey's Cocoa - Natural Unsweetened, 225 G`,
            category: `Baking Pantry Items`,
            image: `https://images-na.ssl-images-amazon.com/images/I/61XS7X0V4HL._SL1000_.jpg`,
            description: `Hershey's Cocoa is 100 percent Natural Unsweetened.
            Enjoy delicious treats from heavenly desserts to fabulous frosting.
            Rich in anti oxidants and dietary fibre.
            Enjoy the rich taste of cocoa with this perfect partner for your baking ideas.`,
            price: 208,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `Aashirvaad Select Premium Sharbati Atta, 5kg`,
            category: `Baking Pantry Items`,
            image: `https://images-na.ssl-images-amazon.com/images/I/818BB562vQL._SL1500_.jpg`,
            description: `Aashirvaad Select is made with 100% MP Sharbati wheat which is harvested from the Sehore region of Madhya Pradesh.
            Aashirvaad Select is a premium quality atta made from the King of Wheat – Sharbati wheat which is bigger in size and has a golden sheen.
            Rotis made with Aashirvaad Select Sharbati atta are sweet in taste and softer in texture.`,
            price: 239,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `Cinnamon Powder Jar, 100 g`,
            category: `Basic Herbs, Spices & Oils`,
            image: `https://images-na.ssl-images-amazon.com/images/I/51fJ4OVCOVS._SL1500_.jpg`,
            description: `please make sure to store these herbs and spices in a cool, dry and dark place, away from direct sunlight or any other heat sources.
            Use as per taste or as directed in the various recipes. While using, always take a dry spoon to pour out the spices or just sprinkle them from the shaker-cap provided along.`,
            price: 179,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `Sprig Celery Sea Salt Seasoning, 175 g`,
            category: `Basic Herbs, Spices & Oils`,
            image: `https://images-na.ssl-images-amazon.com/images/I/51-iQT6xjTL._SL1000_.jpg`,
            description: `This is a Vegetarian product.
            Sea salt.`,
            price: 350,
            countInStock: 10,
            rating: 3.5,
            numReviews: 10,
        },
        {
            name: `Keya Garlic Bread Seasoning 50 Gm x 1`,
            category: `Basic Herbs, Spices & Oils`,
            image: `https://images-na.ssl-images-amazon.com/images/I/41KCNkzUjRL.jpg`,
            description: `Contains Freeze dried herbs are used to retain the premium quality of the product.
            Keya Garlic Bread Seasoning is a perfect accompaniment for your meals.,
            Packed in easy to use and store bottles.
            No preservatives, no fillers, no additives, no anti-caking agents, no MSG.`,
            price: 109,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `Borges Extra Virgin Olive Oil -1L Glass`,
            category: `Basic Herbs, Spices & Oils`,
            image: `https://images-na.ssl-images-amazon.com/images/I/71MsrmlHz%2BL._SL1500_.jpg`,
            description: `Captivating flavour of olives, ideal for salads and dressings.
            Substitute for butter or ghee.
            Made and packed in Spain.
            Maximum Shelf Life 24 Months.`,
            price: 799,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `Natural Virgin Coconut Oil 250 ml`,
            category: `Basic Herbs, Spices & Oils`,
            image: `https://images-na.ssl-images-amazon.com/images/I/61dweckPoYL._SL1500_.jpg`,
            description: `Coco Soul Cold Pressed Virgin Coconut Oil Comes from the house of Marico, the makers of leading brands Saffola and Parachute.
            Extracted from Freshly Harvested Coconuts. 100% Natural & Cold Pressed oil.
            Cold pressing technology helps preserve the vital nutrients, rich aroma and flavour of real coconuts, making it fit for raw consumption.`,
            price: 674,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: `Fortune Soyabean Oil, 1L Pouch`,
            category: `Basic Herbs, Spices & Oils`,
            image: `https://images-na.ssl-images-amazon.com/images/I/51GyUUKe-0L.jpg`,
            description: `Safe, Pure and chemical free oil.
            Makes your skin healthy.
            Light and odourless.
            Helps maintain strong bones.
            Maximum Shelf Life 9 Months.`,
            price: 161,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
        },
    ]
}

export default data;