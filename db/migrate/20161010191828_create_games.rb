class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.time :duration
      t.integer :sets, default: 0
      t.integer :guesses, default: 0
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
