package com.ovniric.service;

import com.ovniric.dto.ClientDTO;
import com.ovniric.model.Client;
import com.ovniric.model.Product;
import com.ovniric.model.user.Role;
import com.ovniric.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class ClientService {

    ClientRepository clientRepository;


    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<ClientDTO> getAllClients() {
        List<Client> clients = clientRepository.findAll();
        return clients.stream().map(this::toUserDTO).collect(Collectors.toList());
    }

    public Optional<Client> getClientByid(Long id){
        Optional<Client> clientSelected = clientRepository.findById(id);
        if (clientSelected.isPresent()){
            return Optional.of(clientSelected.get());
        }else{
            return Optional.empty();
        }
    }

    public Client createClient(Client client) {
        Client ClientTocreate = (Client) clientRepository.save(client);
        return ClientTocreate;
    }

    public void deleteClient(Long id) {
        Optional<Client> productToDelete = getClientByid(id);
        if (productToDelete.isPresent()) {
            clientRepository.deleteById(id);
        }
    }


    public ClientDTO toUserDTO(Client user) {
        ClientDTO dto = new ClientDTO();
        dto.setId(user.getId());
        dto.setFirstName(user.getFirstname());
        dto.setLastName(user.getLastname());
        dto.setEmail(user.getEmail());
        dto.setCity(user.getCity());
        dto.setRoleName(user.getRole().getRoleEnum().name());
        return dto;
    }

    public Client toUser(ClientDTO dto) {
        Client user = new Client();
        user.setFirstname(dto.getFirstName());
        user.setLastname(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setCity(dto.getCity());
        Role role = new Role();
        return user;
    }
}
