class PrecoChannel < ApplicationCable::Channel
  def subscribed
    stream_from "preco_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
