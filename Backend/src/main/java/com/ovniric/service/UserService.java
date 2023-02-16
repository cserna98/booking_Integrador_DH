package com.ovniric.service;

import com.ovniric.model.Role;
import com.ovniric.model.User;
import com.ovniric.repository.RoleRepository;
import com.ovniric.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {


    private UserRepository userRepository;
    private RoleRepository roleRepository;


    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public User createUser(User user) {
        // Encode password
        String encodedPassword = user.getPassword();
        user.setPassword(encodedPassword);

        // Find role by name
      Role role = roleRepository.findByName("");
        user.setRole(role);

        // Save user to the database
        return userRepository.save(user);
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public List<User> GetUser() {
        return userRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
