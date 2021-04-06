const easyinvoice = require('easyinvoice');

const fs = require('fs');

const path = require('path');

async function accountStatementPdf(userId, data){
    const result = await easyinvoice.createInvoice(data);        
    
    fs.writeFileSync(path.resolve(__dirname, `./../public/account_summary_${userId}.pdf`), result.pdf, 'base64');

    return `http:localhost:3000/account_summary_${userId}`;
}

module.exports = accountStatementPdf;