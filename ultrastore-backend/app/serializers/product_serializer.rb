class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :description, :image
  has_many :reviews
  
end
