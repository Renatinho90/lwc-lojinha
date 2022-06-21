import { LightningElement } from "lwc";

export default class App extends LightningElement {
   
   // Definir qual vai ser a cor mostrada por padrao
   isViolaoPreto  = false;
   isViolaoMarrom = true;
   isViolaoRoxo   = false;
   // 3 funcoes ( ViolaoEhPreto, ViolaoMarrom, ViolaoRoxo )
   violaoPreto(){
      this.isViolaoPreto  = true;
      this.isViolaoMarrom = false;
      this.isViolaoRoxo   = false;
   }

   violaoMarrom(){
      this.isViolaoPreto  = false;
      this.isViolaoMarrom = true;
      this.isViolaoRoxo   = false;
   }

   violaoRoxo(){
      this.isViolaoPreto  = false;
      this.isViolaoMarrom = false;
      this.isViolaoRoxo   = true;

   }
  
}
