describe('Cadastro', () =>{
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/');
        cy.get('#page-home main h1').should('have.text',
         'Seja um parceiro entregador pela Buger Eats');
        cy.get('#page-home main a').click();
    });

    it('Seja um entregador', () => {       
        cadastroUsuario('Kaio', '11444645609', 'kaio.santiago.13@hotmail.com',
        '42988652291', '333', 'Casa');
        cy.get('input[name="postalcode"]').type('84025290');
        cy.get('input[value="Buscar CEP"]').click();
        cy.get('input[name="address"]').should('have.value', 'Rua Ucrânia'); 
        cy.get('input[name="district"]').should('have.value', 'Uvaranas'); 
        cy.get('input[name="city-uf"]').should('have.value', 'Ponta Grossa/PR');  
        cy.contains('.delivery-method li', 'Bicicleta').click();   
    });
    
});

function cadastroUsuario(nome, cpf, email, telefone, endereco, complemento) {
    var usuarioDados = new UsuarioDados(nome, cpf, email, telefone, endereco, complemento);
    cy.get('input[name="name"]').type(usuarioDados.nome);
    cy.get('input[name="cpf"]').type(usuarioDados.cpf);
    cy.get('input[name="email"]').type(usuarioDados.email);
    cy.get('input[name="whatsapp"]').type(usuarioDados.telefone); 
    cy.get('input[name="address-details"]').type(usuarioDados.endereco);  
    cy.get('input[name="address-number"]').type(usuarioDados.telefone); 
 
}
class UsuarioDados{ 
   constructor(nome, cpf, email, telefone, endereco, complemento){
       this.nome = nome;
       this.cpf = cpf;
       this.email = email;
       this.telefone = telefone;
       this.endereco = endereco;
       this.complemento = complemento;
   }
}
