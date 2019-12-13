class Api::V1::ProductsController < ApplicationController
    
    def index
        @products = Product.all
        render json: @products, status: 200
    end

    def show
        @product = Product.find(params[:id])
        render json: @product, status: 200
    end

    def create
        @product = Product.create(product_params)
        render json: @product, status: 200
    end

    def update
        @product = Product.find(params[:id])
        @product.update(product_params)
        render json: @product, status: 200
    end

    def destroy
        @product = Product.find(params[:id])
        @product.delete
        render json: {productId: @product.id}
    end
    
    private
    
    def product_params
        params.require(:product).permit(:title, :price, :description, :image)
    end

end
