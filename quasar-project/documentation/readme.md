# Quasar Project

**Autor:** Ana Gómez Partor

**Data d'entrega:** 08/04/2025

## Índex

- [Explicació del Projecte](#explicació-del-projecte)
  - [Pàgines](#pàgines)
  - [Composable](#composable)
- [API](#api)
- [Quasar](#quasar)

## Explicació del Projecte

El projecte simula una gestió de productes d'una botiga virtual. En comptes de fer les funcions de comprar, són les funcions de modificar, afegir i eliminar els productes que ofereix la botiga.

### Pàgines

---

#### ProductList.vue

Pàgina on es mostren tots els productes disponibles. També permet filtrar per categories i un buscador. Al costat de cada producte podem editar-lo o eliminar-lo. També hi ha un botó que permet afegir un producte i un altre que reseteja els productes originals, de forma que obtenim els productes originals de l'API.

#### ProductForm.vue

Pàgina que pot ser tant per editar com per afegir un producte. En cas de ser per editar (si rep l'id d'un producte) apareixen les dades en cada camp del producte seleccionat, en cas contrari ens trobarem un formulari buit. En el últim cas si no hem omplert tots els camps, sortirá un *pop up*.

#### ProductDetail.vue

Pàgina que mostra el detall d'un producte seleccionat desde *ProductList.vue*. Aquí podem veure més informació d'aquest que ens proporciona l'API com la descripció, el *rate* que té i la fotografía més detallada. També hi ha un altre botó que redirecciona al formulari per editar-lo.

### Composable

---

#### UseProducts.js

Aquest composable proporciona una interfície reactiva per gestionar una llista de productes utilitzant `localStorage` com a font de persistència. Utilitza l'API `Fake API Store`, però per fer proves utilitza un JSON local (`DummyProducts`).

#### Funcionalitat

- Recuperar productes
- Obtenir un producte per ID
- Crear un nou producte
- Actualitzar un producte existent
- Eliminar un producte

#### Mètodes

`fetchProducts()`

Carrega els productes des de `localStorage`. Si no existeixen, utilitza les dades que carrega l'API com a font de dades inicial i els desa a `localStorage`.

`fetchProduct(id)`

Retorna un producte pel seu `id`, cercant primer a `localStorage`.

- **Paràmetres:**  
  `id` (number): ID del producte a cercar  
- **Retorna:**  
  Objecte del producte o `undefined` si no es troba.

`createProduct(product)`

Crea un nou producte, li assigna un `id` incremental, el desa a `products` i a `localStorage`.

- **Paràmetres:**  
  `product` (object): Objecte amb les propietats del nou producte (excepte `id`)  
- **Retorna:**  
  Objecte del nou producte creat (incloent-hi `id`)

`updateProduct(id, updatedFields)`

Actualitza un producte pel seu `id` amb els camps proporcionats.

- **Paràmetres:**  
  `id` (number): ID del producte a actualitzar  
  `updatedFields` (object): Camps a actualitzar  
- **Retorna:**  
  Producte actualitzat o `null` si no es troba

`deleteProduct(id)`

Elimina un producte de la llista i actualitza `localStorage`.

- **Paràmetres:**  
  `id` (number): ID del producte a eliminar  
- **Retorna:**  
  `void`

## API

L'API utilitzada es la Fake API Store, és una API de proves que simula una botiga online amb productes ficticis.

**Endpoint principal:** `https://fakestoreapi.com/products`

**Endpoint categories:** `https://fakestoreapi.com/categories`

Estructura de l'API:

```json
{
  "id": Number, // Identificador únic
  "title": String, // Nom del producte
  "price": Number, // Preu en dólars
  "description": String, // Descripció del producte
  "category": String, // Categoria del producte
  "image": String, // URL de la imatge
  "rating": { 
    "rate": Number, // Valoració del producte sobre 5
    "count": Number // Quantitat de gent que ha opinat
  }
}
```

## Quasar

Quasar és un framework de codi obert per a desenvolupar aplicacions web i mòbils amb Vue.js. Proporciona una àmplia col·lecció de components i eines que permeten crear interfícies d'usuari ràpides, modernes i de gran qualitat, amb una gran facilitat d'ús i personalització. A més, Quasar suporta la creació d'aplicacions PWA (Progressive Web App), aplicacions nadiues per a mòbils i escriptori, tot utilitzant el mateix codi base.

Per poder fer l'aplicació i la documentació he utilitzat la web oficial on podem trobar els components, els layouts, com instal·lar l'aplicació entre altres funcionalitats.

### Com funciona Quasar

Quasar és un **framework Vue.js** que facilita la creació d'aplicacions modernes per a diferents plataformes, incloent-hi aplicacions web, mòbils (mitjançant **Cordova** o **Capacitor**) i d'escriptori (mitjançant **Electron**). Proporciona components d'alta qualitat i eines optimitzades per desenvolupar interfícies d'usuari ràpides, escalables i atractives.

Aquests són alguns dels avantatges principals de Quasar:

- **Ús de Vue.js**: Quasar està construït sobre Vue.js, un dels frameworks de JavaScript més populars i lleugers.
- **Components predefinits**: Ofereix una gran varietat de components com botons, llistes, formularis, taules, etc., que estan optimitzats per a rendiment i facilitat d'ús.
- **Compatibilitat multiplataforma**: Amb un sol codi base, pots crear aplicacions per a **web**, **Android**, **iOS** i **escriptori**.
- **Interfície d'usuari consistent**: Els components de Quasar segueixen les línies d'estil de les aplicacions modernes i asseguren una experiència d'usuari coherent.

---

### Com instal·lar Quasar amb NPM

1. **Instal·la el CLI de Quasar:** Si no tens instal·lat el CLI de Quasar, pots fer-ho globalment amb npm:

   ```bash
   npm install -g @quasar/cli```

2. **Crea un nou projecte Quasar:** Un cop instal·lat el CLI, pots crear un nou projecte Quasar utilitzant el següent comandament:

    ```bash
    quasar create nom-del-projecte
    ```

    Aquest comandament crearà un nou projecte Quasar amb una estructura predeterminada.

3. **Accedeix al directori del teu projecte:**

    ```bash
    cd nom-del-projecte
    ```

4. **Instal·la les dependències:** Després de crear el projecte, cal instal·lar les dependències necessàries per al projecte. Pots fer-ho amb npm:

    ```bash
    npm install
    ```

5. **Inicia el servidor de desenvolupament:** Un cop instal·lades les dependències, pots començar a desenvolupar i veure l'aplicació al navegador amb el següent comandament:

    ```bash
    quasar dev
    ```

    Això iniciarà el servidor de desenvolupament i obrirà l'aplicació al navegador.

### Llistat de components utilitzats

- **q-page:** representa una pàgina dins d’una aplicació. Generalment s'utilitza juntament amb el sistema de rutes de Quasar per a definir les pàgines dins de l'app.

- **q-input:** camp de text que permet a l'usuari introduir dades. Admet tipus d'entrada com a text, contrasenya, cerca, etc., i proporciona diverses opcions per a validar, personalitzar l'estil i gestionar esdeveniments.

- **q-select:** crea llistes desplegables (selects) amb diversos elements.

- **q-btn:** botó que es pot personalitzar per tal de realitzar accions com ara submitir formularis, navegar entre pàgines o desencadenar esdeveniments.

- **q-list:** mostra una llista de contingut.

- **q-item:** element de llista que es fa servir dins de `q-list`. Cada `q-item` pot ser un element de la llista que es pot configurar per realitzar accions o mostrar contingut personalitzat.

- **q-item-section:** és utilitzat dins d'un `q-item` per a dividir i organitzar el contingut. Es pot utilitzar per mostrar títols, descripcions, icones, etc.

- **q-item-label:** és utilitzat dins d’un q-item per mostrar etiquetes o textos descriptius.

- **q-img:** component d’imatge que permet carregar i mostrar imatges de manera optimitzada.

- **q-dialog:**  mostrar finestres emergents (diàlegs) amb contingut personalitzat. Es pot utilitzar per mostrar alertes, formularis o qualsevol altre tipus de contingut modal.

- **q-icon:** component per mostrar icones.

- **q-card:** component de targeta que permet agrupar informació dins d’un bloc visual.

- **q-card-section:** es fa servir dins d'un q-card per dividir el contingut en seccions.

- **q-form:** és utilitzat per gestionar formularis. Facilita la validació, el control d'errors i la manipulació de dades dins d’un formulari.
