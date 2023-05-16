# Backend-Course

Node.js
Express
MongoDB

# Uppdragsbeskrivningen (Tekniska krav längre ner)
Dotterbolaget Phone Duck inc. till bolaget Budget Ducklings, som hanterar utveckling av ny mjukvara för personer som har stött på oönskade situationer i traffiken fick nyligen höra om en älgvandring som hade stoppat resenärer förbi Hudiksvall.

Gertrude, resnär fast i traffikstoppet, som är ett stort fan av att chattapplikationer skickade in ett förslag till Phone Duck inc. som gick ut på att utsatta i närtraffiken kunde ansluta till olika chatt kanaler baserat på intresse. Tanken var att det finns en huvudsaklig kanal som skickar ut nödmeddelanden för stopp, och en annan kanal som annonserade ut nya kanaler som användare hade skapat upp för att roa sig i väntan på att trafikken skulle släppa.

Viktig avgräsning
Detta är en backendkurs och sätter inga krav på en fungerande frontend applikation. I början av kursen så fick ni möjlighet att fundera kring hur den skulle se ut vilket kan underlätta i testandet av applikationen. Ifall backenden går att köras enligt kraven enbart med thunderclient, postman eller liknande verktyg så är uppgiften godkänt.

# Tekniska krav
Studerande utvecklar en backend tjänst som kan lagra information om chatter och chattkanaler enligt beskrivning nedan.

Terminologi
Annonserade kanaler syftar på kanaler som tidigare skickats ut via en PUT förfrågan och finns tillgängliga via channel api:et, se detaljer nedan. Varje annonserad kanal ska ha ett tema som skaparen av kanalen sätter.

Nödkanal syftar på en unik (endast en) kanal som skapas vid uppstart och håller i alla nödmeddelanden som skickas.

Endpoints
Backendend ska innehålla minst följande fungerande endpoints. Varje endpoint beskrivs som "[http-metod] - url <-- förväntat resultat vid anrop".

[GET] - http://address:port/ducks/api/channel/ <-- hämtar en lista över annonserade kanaler. Se VG kritierier för krav till ett högre betyg.

[GET] - http://adress:port/ducks/api/channel/:id <-- hämtar innehållet i en identiferad kanal som tidigare har annonserats ut, detta syftar på meddelanden som har skickats i kanalen. Se VG kritierier för krav till ett högre betyg.

[PUT] - http://address:port/ducks/api/channel/ <-- skapar en ny kanal. Tema (rubrik) på kanalen ska skickas som en del http-body:n, förslagvis som del av ett json objekt.

[POST] - http://adress:port/ducks/api/channel/:id <-- skickar ut ett nytt meddelanden till en identiferad kanal som tidigare har annonserats ut. Innehållet i ett meddlande bör vara minst anvsändare och innehåll.

[DELETE] - http://adress:port/ducks/api/channel/:id <-- tar bort en identiferad kanal som tidigare annonserats ut. Se VG kritierna för krav till ett högre betyg.

[GET] - http://adress:port/ducks/api/broadcast/ <-- hämtar en lista över alla händelser som har skickats ut, ex. älgvandring, traffikolycker m.m. Se VG kritierier för krav till ett högre betyg.

[POST] - http://adress:port/ducks/api/broadcast/ <-- skapar en ny nödhändelse. Detta anrop ska kräva ett giltigt JWT token.
