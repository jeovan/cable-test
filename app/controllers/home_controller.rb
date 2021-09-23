class HomeController < ApplicationController
  def index
    
  end

  def show
    # ActionCable.server.broadcast "preco_channel",
    # content:' @message.content '
  end
end
