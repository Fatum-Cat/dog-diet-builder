export const INGREDIENTS = {
  Meat: {
    groups: {
      "Group A": ["Chicken", "Turkey", "Beef"],
      "Group B": ["Pork", "Lamb", "Duck"],
      "Group C": ["Rabbit", "Venison", "White fish"]
    },
    organ_meat: ["Liver", "Heart", "Kidney", "Spleen"]
  },
  Grains: {
    groups: {
      "Group A": ["Rice", "Oats", "Buckwheat"],
      "Group B": ["Millet", "Barley", "Quinoa"]
    }
  },
  Vegetables: {
    groups: {
      "Group A": ["Carrot", "Pumpkin", "Zucchini"],
      "Group B": ["Spinach", "Broccoli", "Green beans"]
    }
  },
  oils: {
    groups: {
      "Ungrouped": ["Cod-liver oil", "Salmon oil", "Flaxseed oil"]
    }
  },
  Fruits: {
    groups: {
      "Ungrouped": ["Apple", "Blueberries", "Banana", "Pear"]
    }
  },
  Mixed: {
    groups: {
      "Ungrouped": ["Egg shell (powder)", "Calcium carbonate", "Iodized salt"]
    }
  }
} as const;

