import jsPDF from "jspdf";
import Plushie from "./Plushies";
import Client from "./Client";
import fs from "fs";

export default function generatePDF(client: Client) : void {
    const doc = new jsPDF();
    const cartProducts: Plushie[] = client.getCart().getCartProducts();

    doc.setFontSize(18);
    doc.text(`Cliente: ${client.getName()}`, 10, 20);
    

    doc.setFontSize(14);
    doc.text("Produtos no carrinho:", 10, 30);
    doc.text("Nome do Produto:", 10, 40);
    doc.text("Preço:", 150, 40);

    cartProducts.forEach((product, index) => {
        const yPosition = 50 + index * 10;

        doc.setFontSize(12);
        doc.text(product.getName(), 10, yPosition);

        doc.text(product.getCostPrice().toFixed(2) + "BRL", 150, yPosition);

    });
    
    const pdfOut = doc.output("arraybuffer");

    const filePath = `./${client.getName()}_Carrinho.pdf`;

    fs.writeFileSync(filePath, Buffer.from(pdfOut), 'binary');
};