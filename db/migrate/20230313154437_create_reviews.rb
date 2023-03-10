class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :description
      t.references :author_id, null: false, foreign_key: { to_table: :users }
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
