package com.findhabitat.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class MultiResponse<T>{
    private List<T> data;    
}
