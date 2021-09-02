
describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("input os nomes nos campos", () => {
        const firstName = "Leandro"
        const lastName =  "Machado"
        //inputa nomes no sistema em forma de text
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("testecypress@talkabout.com");
        cy.get("#requests").type("Carnivoro");
        cy.get("#signature").type(`${firstName} ${lastName}`);

    });
        //seleciona o checkbox numero 2
    it("selecionar dois tickets",() => {
        cy.get("#ticket-quantity").select("2");
    });


    it("selecionar radion button vip",() => {

        cy.get("#vip").check();
    });

    it("clicando em checkbox",() => {
        
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#social-media").check();
    });

    it("clicando em uncheck no friend",() => {
        
        cy.get("#friend").uncheck();
        cy.get("#publication").check();
        cy.get("#social-media").check();
    });



        //Validando Nome da pagina
    it("has 'TICKETBOX' header's heading",() => {
        cy.get("header h1").should("contain","TICKETBOX");

    
    });
    
    it("alert on invalid email", () => {    
        cy.get("#email")
        .as("email")
        .type("leandro.b.machado-live.com");


        cy.get("#email.invalid").should("exist");

        cy.get("@email")
        .clear()
        .type("leandro.b.machado@live.com")

        cy.get("#email.invalid").should("not.exist");

});

    it("fills and reset the form",() => {

        const firstName = "Leandro";
        const lastName =  "Machado";
        const fullName = `${firstName} ${lastName}`;
        
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("leandro.b.machado@live.com");
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#friend").check();
        cy.get("#requests").type("IPA beer");

        cy.get(".agreement p").should(
          "contain",
          `I, ${fullName}, wish to buy 2 VIP tickets.`

          );
        cy.get("#agree").click();
        cy.get("#signature").type(fullName);
        
        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");

        cy.get("button[type ='reset']").click();

        cy.get("@submitButton").should("be.disabled");

    });

    it("fills mandatory filds using support command", () => {
        const customer = {
            firstName : "João",
            lastName : "Silva",
            email:  "alelitgames@gmail.com"

        };

        cy.fillsMandatoryFields(customer);

        cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled");

    cy.get("#agree").uncheck();
    cy.get("@submitButton").should("be.disabled");

    });

});