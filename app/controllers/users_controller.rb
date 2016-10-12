class UsersController < ApplicationController
  before_action :require_user, only: [:show]

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      flash[:success] = "Thanks for signing up!"
    else
      render 'new'
    end
  end

  private
    def user_params
      params.permit(:username, :email, :password)
    end
end
