class Product < ApplicationRecord
    has_many :reviews

    validates_presence_of :title, :price, :description, :image
    
end
