# Saját rendelők – rendelőhelyszín alapú routing 01

## Cél

A kapu mögötti következő rendelői világ ne általános, egyhelyszínes logikával épüljön tovább, hanem már a whitebox szinten is számoljon a valós rendelői ágazásokkal.

## Figyelembe vett rendelői irányok

- **NEAK rendelő Kazincbarcika**
- **NEAK rendelő Ózd**
- **magánrendelő Ózd – 2 székes**

## Kiemelési szabály

- a **magánrendelő Ózd – 2 székes** a legprofibb, kiemelt irányként jelenhet meg;
- a két **NEAK** rendelőnél kötelezően látszania kell annak, hogy **külön városban** működnek;
- a rendszernek már a whitebox szinten is segítenie kell, hogy a látogató ne „ész nélkül foglaljon”, hanem előbb helyszínt és rendelőtípust értsen meg.

## Következmény a térlogikára

### Érkezési zóna

A látogató első döntése később nem pusztán „kérek-e időpontot”, hanem az is, melyik rendelői irány felé szeretne továbblépni. Itt külön figyelmeztetni kell arra, hogy a két NEAK út nem ugyanabba a városba vezet.

### Konzultációs irány

A konzultációs útvonal később figyelembe veheti, hogy:

- NEAK rendelő felé történik a továbbhaladás;
- vagy a kiemelt ózdi magánrendelő felé.

### Időpontkérési előszoba

Az időpontkérés nem egyetlen egységes foglalási ritmusként jelenik meg, hanem rendelőnként eltérő útvonalat kaphat. Ez különösen fontos a két eltérő városban működő NEAK rendelő és a kiemelt magánrendelő szétválasztásánál.

## Whitebox korlát

Ez a build továbbra sem:

- kér személyes adatot;
- foglal időpontot;
- mutat működő naptárat;
- dönt betegút vagy jogosultság kérdésében.
