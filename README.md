# Development

### Link to Deployed Website
https://sadcapybara137.github.io/development/

### Goal and Value of the Application
This application is a basic bakery webpage which allows users to view a variety of baked goods. Users of the interface are able to filter by vegan and gluten free options and sort items by price. The webpage has a shopping cart which users can add and remove items from and view the cart total.

### Usability Principles Considered
Filters can be toggled on and off with checkboxes, if the user wants to return the list of items displayed to its original state, un-check the filters selected. Users can add and removed items from the cart using the add and remove buttons located next to each item. If a user wishes to clear their cart, their is a clear cart button in the cart section of the page. The visual layout of the page includes 4 sections: the title, item listings, filters, and the cart. The cart and filters are grouped together on the left side of the page whereas the item listings are in the center so users are drawn to the items.

### Organization of Components
The main component is the BakeryItem component, which contains props for item names, boolean fields for gluten free and vegan, the price, and the path to an image of the item. The cart is stored as an array of items which contain name, price, and quantity fields. The cart uses state to update its contents when the user selects a button to add or remove an item from the cart.

### How Data is Passed Down Through Components
The bakery data is defined manually in JSON format and includes fields for name, gluten free, vegan, price, and image path. There is a sorted copy of this data which is obtained using the sortData function. To display each item on the page, the bakeryData is mapped to BakeryItem components.

### How the User Triggers State Changes
The user triggers changes in state when they add and remove items from the cart. Additionally, clicking filter and sorting checkboxes changes the state of boolean flags indicating whether to sort or filter by different attributes.

