class AddNomeToUsuario < ActiveRecord::Migration[6.1]
  def change
    add_column :usuarios, :nome, :string
  end
end
