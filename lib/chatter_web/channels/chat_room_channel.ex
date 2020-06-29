defmodule ChatterWeb.ChatRoomChannel do
  use ChatterWeb, :channel

  def join("chat_room:" <> _room_name, _msg, socket) do
    {:ok, socket}
  end

  def handle_in("new_message", payload, socket) do
    IO.puts("HANDLE_IN...")
    broadcast(socket, "new_message", payload)
    {:noreply, socket}
  end
end
