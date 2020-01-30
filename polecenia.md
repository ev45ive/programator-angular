# Instalujemy narzedzia
npm i -g @angular/cli
          
# generujemy nowy projekt
ng new nazwa-projektu
cd nazwa-projektu

# startuj wbudowny server
npm start

# Wygeneruj komponent
ng generate component nazwa_komponentu
ng g c nazwa_komponentu

# JSON
json-server jsonplaceholder.typicode.com/db

npm run ng -- g m blog -m app --routing true --force true

# GH Pages

git subtree push --prefix site/ origin gh-pages


# Netlify

npm i -g netlify

netlify deploy

netlify.toml