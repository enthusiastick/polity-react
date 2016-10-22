class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :avatar
      t.string :confirmation_token
      t.datetime :confirmed_at
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :handle, null: false
      t.string :identifier, null: false
      t.string :last_name, null: false
      t.string :password_reset_token
      t.datetime :password_reset_sent_at

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :handle, unique: true
    add_index :users, :identifier, unique: true
  end
end
