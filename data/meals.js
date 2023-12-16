import { nanoid } from 'nanoid';

export default [
  {
    monday: {
      id: nanoid(),
      days: 'PONIEDZIAŁEK - WTOREK',
      meals: [
        {
          breakfast: {
            id: nanoid(),
            meal: 'Omlet warzywny z chlebem pełnoziarnistym',
            quantity: [
              '2 jajka',
              '50g papryki',
              '1 kromka chleba pełnoziarnistego',
              'Sól, pieprz',
            ],
            ingredients: [
              'Jajka',
              'Papryka',
              'Chleb pełnoziarnisty',
              'Sól, pieprz',
            ],
          },
          second_breakfast: {
            id: nanoid(),
            meal: 'Sałatka z tuńczykiem i jajkiem na twardo',
            quantity: [
              '50g tuńczyka w wodzie',
              '1 jajko',
              '100g rukoli/szpinaku',
              '30g pomidora',
              '1 łyżka oliwy',
            ],
            ingredients: [
              'Tuńczyk w wodzie',
              'Jajko',
              'Rukola/Szpinak',
              'Pomidor',
              'Oliwa',
            ],
          },
          lunch: {
            id: nanoid(),
            meal: 'Sałatka z makaronem pełnoziarnistym i kurczakiem',
            quantity: [
              '100g makaronu pełnoziarnistego',
              '100g ugotowanego kurczaka',
              '50g rukoli/szpinaku',
              '30g pomidora',
            ],
            ingredients: [
              'Makaron pełnoziarnisty',
              'Ugotowany kurczak',
              'Rukola/szpinak',
              'Pomidor',
            ],
          },
          dinner: {
            id: nanoid(),
            meal: 'Makaron ryżowy na słodko',
            quantity: [
              '250g truskawek mrożonych',
              '150g Skyr',
              '100g sera twarogowego chudego',
              '50g makaronu ryżowego',
              '20g migdałów',
            ],
            ingredients: [
              'Truskawki mrożone',
              'Skyr',
              'Ser twarogowy chudy',
              'Makaron ryżowy',
              'Migdały',
            ],
          },
        },
      ],
      wednesday: {
        id: nanoid(),
        days: 'ŚRODA - CZWARTEK',
        breakfast: {
          meal: 'Chudy jogurt grecki z owocami i orzechami',
          quantity: ['150g', '50g', '15g'],
          ingredients: ['Chudy jogurt grecki', 'Owoce', 'Orzechy włoskie'],
        },
        second_breakfast: {
          meal: 'Chleb pełnoziarnsity z masłem orzechowym i bananem',
          quantity: ['2 kromki', '30g', '1'],
          ingredients: ['Chleb pełnoziarnisty', 'Masło orzechowe', 'Banan'],
        },
        lunch: {
          meal: 'Ryż z warzywami i jajkiem sadzonym',
          quantity: ['100g', '100g', '1', '1 łyżka', '1g'],
          ingredients: [
            'Ryż brązowy',
            'Mieszanka warzyw',
            'Jajka',
            'Oliwa',
            'Sól, pieprz',
          ],
        },
        dinner: {
          meal: 'Pełnoziarnsite tosty z mozarellą',
          quantity: ['120g', '4 kromki', '75g'],
          ingredients: ['Pomidor', 'Chleb pełnoziarnisty', 'Mozarella lekka'],
        },
      },
      friday: {
        id: nanoid(),
        days: 'PIĄTEK - SOBOTA',
        breakfast: {
          meal: 'Kanapka z indykiem i warzywami',
          quantity: ['2 kromki', '60g', 'Wedle uznania', '1 łyżeczka'],
          ingredients: [
            'Chleb pełnoziarnsity',
            'Mięso z indyka',
            'Pomidor/ogórek',
            'Musztarda',
          ],
        },
        second_breakfast: {
          meal: 'Jogurt naturalny z dodatkiem nasion i miodu',
          quantity: ['200g', '15g', '1 łyżeczka'],
          ingredients: ['Jogurt naturalny', 'Słonecznik', 'Miód'],
        },
        lunch: {
          meal: 'Sałatka z pełnoziarnistym ryżem, tuńczykiem i jajkiem na twardo',
          quantity: ['100g', '50g', '1', '50g', '1 łyżka'],
          ingredients: [
            'Ryż',
            'Tuńczyk w wodzie',
            'Jajka',
            'Rukola/Szpinak',
            'Oliwa',
          ],
        },
        dinner: {
          meal: 'Szejk snickers',
          quantity: [
            'Mleko',
            'Truskawki mrożone',
            'Płatki owsiane',
            'Daktyle',
            'Masło orzechowe',
            'Odżywka białkowa',
            'Kakao',
          ],
          ingredients: ['250g', '120g', '40g', '25g', '20g', '20g', '5g'],
        },
      },
      sunday: {
        id: nanoid(),
        days: 'NIEDZIELA',
        breakfast: {
          meal: 'Jajecznica z tuńczykiem',
          quantity: ['2', '30g', '1 łyżka', 'Sól, pieprz'],
          ingredients: ['Jajka', 'Tuńczyk w wodzie', 'Oliwa', '1g'],
        },
        second_breakfast: {
          meal: 'Chude wędliny z warzywami i orzechami',
          quantity: ['60g', '50g', '15g'],
          ingredients: ['Szynka', 'Pomidor/ogórek', 'Orzechy włoskie'],
        },
        lunch: {
          meal: 'Sałatka z komosą ryżową, warzywami i grillowanym kurczakiem',
          quantity: ['100g', '150g', '50g', '50g'],
          ingredients: [
            'Komosa ryżowa',
            'Pierś z kurczaka',
            'Papryka',
            'Pomidor',
          ],
        },
        dinner: {
          meal: 'Owocowy serek wiejski z mleczną bułką',
          quantity: ['150g', '2 sztuki', '20g', '15g'],
          ingredients: [
            'Serek wiejski',
            'Bułki mleczne',
            'Dżem 100% owoców',
            'Orzechy włoskie',
          ],
        },
      },
    },
  },
];
