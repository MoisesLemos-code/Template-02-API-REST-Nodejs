module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '2143',
  database: 'mercadoDB',
  define: {
    timestamps: true,
    underscored: true,
  }
};

//underscored -> Nome das tabelas em snake case (nome_tabela)