fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p')
    .then(response => response.json())
    .then(data => {
        const cocktails = data.drinks;
        const cocktailsList = document.getElementById('cocktails-list');

        document.getElementById("cocktails-list").style.padding = "10px 10px 10px 30px";

    cocktails.forEach(drink => {
        const listItem = document.createElement('h2');
        listItem.textContent = drink.strDrink;
        listItem.style.marginBottom = '5px'
        listItem.style.textAlign = 'center';

        const tag = document.createElement('p');
        tag.textContent = drink.strTags;
        tag.style.marginBottom = '5px'
        tag.style.textAlign = 'center';

        const category = document.createElement('p');
        category.textContent = drink.strCategory;
        category.style.textAlign = 'center';

        const glass = document.createElement('p');
        glass.textContent = drink.strGlass;
        glass.style.textAlign = 'center';

        const instructions = document.createElement('p');
        instructions.textContent = drink.strInstructions;
        instructions.style.textAlign = 'center';

        cocktailsList.appendChild(listItem);
        cocktailsList.appendChild(tag);
        cocktailsList.appendChild(category);
        cocktailsList.appendChild(glass);
        const lineBreak0 = document.createElement('br');
        cocktailsList.appendChild(lineBreak0);
        cocktailsList.appendChild(instructions);
        const lineBreak1 = document.createElement('br');
        cocktailsList.appendChild(lineBreak1);

        for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];
            
            if (!ingredient) break;

            const ingredientParagraph = document.createElement('dd');
            ingredientParagraph.textContent = `${measure} ${ingredient}`;
            cocktailsList.appendChild(ingredientParagraph);
            ingredientParagraph.style.textAlign = 'center';
        }

        const lineBreak2 = document.createElement('br');
        cocktailsList.appendChild(lineBreak2);

        const image = document.createElement('img');
        image.style.width = "250px";
        image.style.height = "250px";
        image.style.border = '1px solid black';
        image.style.marginBottom = '10px';
        image.style.borderRadius = '150px'
        image.src = drink.strDrinkThumb;         
        cocktailsList.appendChild(image);
        image.style.display = 'block';
        image.style.margin = '0 auto';
        image.addEventListener('mouseover', () => {
            image.style.transition = '.3s linear';
            image.style.transform = 'scale(2)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'none';
        });

        const lineBreak3 = document.createElement('br');
        cocktailsList.appendChild(lineBreak3);
    });
    cocktailsList.style.background = '#C6C6C6';
})
    .catch(error => console.error('Error:', error));

    