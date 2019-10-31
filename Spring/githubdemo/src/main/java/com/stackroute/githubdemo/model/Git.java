package com.stackroute.githubdemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "repo")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Git {
    @Id
    private  String id;
    private String name;
}

