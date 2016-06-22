class Api::TodosController < ApplicationController


  def create
    todo = Todo.create!(todo_params)
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id]).destroy!
    render json: {}
  end

  def update
    todo = Todo.find(params[:id]).update!
    render json: todo
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  def index
    todo = Todo.all()
    render json: todo
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
