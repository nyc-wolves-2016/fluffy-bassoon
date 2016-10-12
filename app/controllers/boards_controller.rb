class BoardsController < ApplicationController
  def index
    board = params[:data].map do |card|
        card
      end
    cards = board.map { |card| card[1] }
    response = cards.combination(3)
    render json: {response: response}
  end
end
