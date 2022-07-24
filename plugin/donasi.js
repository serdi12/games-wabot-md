let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [6289516947204]
│ • Telkomsel [6289516947204]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/IyanMd
│ • Gopay [6289516947204]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
