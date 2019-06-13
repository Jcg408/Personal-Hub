class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.text :saying
      t.string :author

      t.timestamps
    end
  end
end
