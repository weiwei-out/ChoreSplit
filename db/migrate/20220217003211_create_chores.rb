class CreateChores < ActiveRecord::Migration[7.0]
  def change
    create_table :chores do |t|
      t.string :name
      t.string :description
      t.integer :points
      t.boolean :completed

      t.timestamps
    end
  end
end
