class Api::V1::ReviewsController < ApplicationController
  
  def index
    @reviews = Review.all
    render json: @reviews, status: 200
  end

  def show
    @review = Review.find(params[:id])
    render json: @review, status: 200
  end

  def create
    @review = Review.create(review_params)
    render json: @review, status: 200
  end

  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
    render json: @review, status: 200
  end

  def destroy
    @review = Review.find(params[:id])
    @review.delete
    render json: {reviewId: @review.id}
  end

  private

  def review_params
    params.require(:review).permit(:content, :product_id)
  end

end
