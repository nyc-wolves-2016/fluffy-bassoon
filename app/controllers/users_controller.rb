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
      log_in(@user)
      binding.pry
      if request.xhr?
      flash[:success] = "Thanks for signing up!"
      else
        redirect_to root_path
      end
    else
      @errors = @user.errors.full_messages
      binding.pry
      redirect_to root_path
    end
  end

  private
    def user_params
      params.permit(:username, :email, :password)
    end
end
